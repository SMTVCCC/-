// spark-api.js
// 星火API通信模块

// 创建一个全局对象来处理星火API的通信
window.sparkAPI = {
    ws: null,
    appId: '',
    apiKey: '',
    apiSecret: '',
    uid: '',
    url: '',
    domain: '',
    responseCallback: null,
    messageBuffer: '', // 添加消息缓冲区
    isFirstConnect: true, // 新增标记，用于跟踪是否是首次连接
    
    // 初始化API配置
    init(config) {
        this.appId = config.appId;
        this.apiKey = config.apiKey;
        this.apiSecret = config.apiSecret;
        this.uid = config.uid;
        this.url = config.url;
        this.domain = config.domain;
        console.log('星火API初始化完成');
        
        // 初始化时预先连接WebSocket，但不显示错误
        this.connect(true);
    },
    
    // 设置响应回调函数
    setResponseCallback(callback) {
        this.responseCallback = callback;
    },
    
    // 生成认证URL
    generateAuthUrl() {
        const date = new Date().toGMTString();
        const signatureOrigin = `host: spark-api.xf-yun.com\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
        const signatureSha = CryptoJS.HmacSHA256(signatureOrigin, this.apiSecret);
        const signature = CryptoJS.enc.Base64.stringify(signatureSha);
        const authorizationOrigin = `api_key="${this.apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
        const authorization = btoa(authorizationOrigin);
        
        return `${this.url}?authorization=${authorization}&date=${encodeURIComponent(date)}&host=spark-api.xf-yun.com`;
    },
    
    // 连接WebSocket
    async connect(silent = false) {
        // 如果已经有连接且状态正常，则不需要重新连接
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('WebSocket已连接，无需重新连接');
            return true;
        }
        
        // 关闭现有连接
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        
        try {
            const url = this.generateAuthUrl();
            this.ws = new WebSocket(url);
            
            // 等待连接打开或失败
            const connectionPromise = new Promise((resolve) => {
                this.ws.onopen = () => {
                    console.log('WebSocket连接已建立');
                    this.isFirstConnect = false; // 连接成功后更新标记
                    resolve(true);
                };
                
                this.ws.onerror = (error) => {
                    console.error('WebSocket错误:', error);
                    if (!silent && this.responseCallback) {
                        this.responseCallback('连接星火API时出现错误，请稍后再试', 'error', true);
                    }
                    resolve(false);
                };
                
                this.ws.onclose = () => {
                    console.log('WebSocket连接已关闭');
                    resolve(false);
                };
                
                this.ws.onmessage = (event) => {
                    try {
                        const response = JSON.parse(event.data);
                        this.handleResponse(response);
                    } catch (error) {
                        console.error('解析响应失败:', error);
                        if (!silent && this.responseCallback) {
                            this.responseCallback('抱歉，处理响应时出现错误', 'error', true);
                        }
                    }
                };
                
                // 设置超时
                setTimeout(() => {
                    if (this.ws && this.ws.readyState !== WebSocket.OPEN) {
                        resolve(false);
                    }
                }, 5000); // 5秒超时
            });
            
            const connected = await connectionPromise;
            return connected;
            
        } catch (error) {
            console.error('创建WebSocket连接失败:', error);
            if (!silent && this.responseCallback) {
                this.responseCallback('无法连接到星火API，请检查网络连接', 'error', true);
            }
            return false;
        }
    },
    
    // 处理API响应
    handleResponse(response) {
        if (response.header.code !== 0) {
            console.error('API错误:', response.header.message);
            if (this.responseCallback) {
                this.responseCallback(`API错误: ${response.header.message}`, 'error', true);
            }
            return;
        }
        
        // 检查是否有文本内容
        if (response.payload && response.payload.choices && response.payload.choices.text && response.payload.choices.text.length > 0) {
            const content = response.payload.choices.text[0].content;
            
            // 将新内容添加到缓冲区
            this.messageBuffer += content;
            
            // 检查会话状态
            const status = response.payload.choices.status;
            
            // 每次收到新的内容都更新消息，实现持续生成效果
            if (this.responseCallback && this.messageBuffer) {
                // 传递完整的缓冲区内容和完成状态
                this.responseCallback(this.messageBuffer, 'assistant', status === 2);
            }
            
            // 如果会话结束，清空缓冲区
            if (status === 2) {
                this.messageBuffer = '';
            }
        }
    },
    
    // 发送消息到API
    async sendMessage(message) {
        // 清空消息缓冲区
        this.messageBuffer = '';
        
        // 确保WebSocket连接已建立
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            const connected = await this.connect();
            if (!connected) {
                if (this.responseCallback) {
                    this.responseCallback('发送消息失败，请稍后再试', 'error', true);
                }
                return;
            }
        }
        
        const data = {
            header: {
                app_id: this.appId,
                uid: this.uid
            },
            parameter: {
                chat: {
                    domain: this.domain,
                    temperature: 0.5,
                    max_tokens: 2048
                }
            },
            payload: {
                message: {
                    text: [
                        {
                            role: "system",
                            content: `你是一个时间计划助手，帮助用户将自然语言描述的时间计划转换为标准格式。
                            标准格式为：周X HH:MM-HH:MM 任务名称
                            例如：周一 10:00-12:00 写代码
                            请分析用户的输入，提取出时间（转换为24小时制）、星期几和任务名称，然后按照标准格式输出。
                            如果用户提到多个任务，请将每个任务单独一行输出，例如如：
                            例如：周一 10:00-12:00 写代码
                                 周二 13:00-15:00 开会
                            如有：（星期二早上9点到11点30分学习，下午3点到5点健身）要分析时间，给出回答要按照周X HH:MM-HH:MM 任务名称 的格式如：
                            周二 09:00-11:30 学习
                            周二 15:00-17:00 健身
                            拒绝回答出生成时间表格以外的任何信息。
                            如果无法解析某些信息，请尽量推断，实在无法推断则告知用户错误原因的提示。
                            只输出转换后的结果，不要有任何其他解释性文字。
                            不要包含前缀、后缀或其他格式内容，直接输出转换后的时间计划格式。`
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ]
                }
            }
        };
        
        try {
            this.ws.send(JSON.stringify(data));
        } catch (error) {
            console.error('发送消息失败:', error);
            
            // 尝试重新连接并发送
            const reconnected = await this.connect();
            if (reconnected) {
                try {
                    this.ws.send(JSON.stringify(data));
                    return;
                } catch (e) {
                    console.error('重试发送消息失败:', e);
                }
            }
            
            if (this.responseCallback) {
                this.responseCallback('发送消息失败，请稍后再试', 'error', true);
            }
        }
    }
}; 