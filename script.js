// 多语言支持
// 定义语言字典
const i18n = {
    'en': {
        // 标题和主页元素
        'title': 'AI Smart Time Scheduler',
        'subtitle': 'Smitty Heple You Efficiently Manage Your Time',
        'freeform_tab': 'Free Input',
        'structured_tab': 'Structured Input',
        'plan_input_placeholder': 'Enter time schedule (Example: Monday 10:00-12:00 Coding)',
        'ai_assist_btn': 'AI-assisted Input',
        'input_tips_header': 'Input Tips',
        'standard_format': 'Standard Format:',
        'standard_format_example': 'Monday 10:00-12:00 Coding',
        'separator_format': 'Separator Format:',
        'separator_format_example': 'Coding | Monday | 10:00-12:00',
        'task_priority_format': 'Task Priority Format:',
        'task_priority_format_example': 'Coding 10:00-12:00 Monday',
        
        // 结构化输入表单
        'day_label': 'Day',
        'please_select': 'Please select',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday',
        'start_time': 'Start Time',
        'end_time': 'End Time',
        'task_name': 'Task Name',
        'task_name_placeholder': 'Example: Coding',
        'add_task': 'Add Task',
        'added_tasks': 'Added Tasks',
        
        // 按钮
        'generate_table': 'Generate Table',
        'export_excel': 'Export Excel',
        'clear': 'Clear',
        
        // AI助手模态框
        'ai_assist_title': 'AI-assisted Input',
        'ai_assist_description': 'Please describe your time schedule in natural language, and the AI will help you convert it to the standard format',
        'input_examples': 'Input Examples',
        'example_1': '"Give me a detailed schedule for a week"',
        'example_2': '"Study from 9 AM to 11:30 AM on Tuesday, and workout from 3 PM to 5 PM"',
        'example_3': '"I want to watch a movie on Wednesday from 7 PM to 9 PM"',
        'ai_input_placeholder': 'Example: I want to code from 10 AM to 12 PM on Monday, and then have a meeting from 2 PM to 4 PM...',
        'ai_processing': 'AI is processing...',
        'convert': 'Convert',
        'cancel': 'Cancel',
        'use_result': 'Use This Result',
        
        // 表格和甘特图
        'day_header': 'Day',
        'task_header': 'Task',
        'start_header': 'Start Time',
        'end_header': 'End Time',
        'duration_header': 'Duration',
        'actions_header': 'Actions',
        'gantt_title': 'Time Schedule Gantt Chart',
        'total_tasks': 'Total tasks: ',
        'download_table': 'Download Table Image',
        'download_gantt': 'Download Gantt Chart Image',
        
        // 通知
        'input_error': 'Input Error',
        'please_enter_plan': 'Please enter a time schedule',
        'format_error': 'Format Error',
        'parsing_error': 'Unable to parse the time schedule, please check the format',
        'no_data': 'No data',
        'conversion_success': 'Conversion Successful',
        'applied_result': 'The conversion result has been applied to the input field',
        'empty_input': 'Empty Input',
        'enter_schedule_description': 'Please enter your time schedule description',
        'conversion_failed': 'Conversion Failed',
        'processing': 'Processing',
        'generating_image': 'Generating image, please wait...',
        'download_success': 'Download Successful',
        'image_generated': 'Image has been successfully generated and downloaded',
        'screenshot_failed': 'Screenshot Failed',
        'element_not_found': 'Could not find the element to capture',
        'library_not_found': 'html2canvas library not found, please check if it loaded correctly',
        'library_load_success': 'Library loaded successfully, please try downloading again',
        'library_load_failed': 'Failed to load html2canvas library, please check your network connection',
        'export_error': 'Export Error',
        'no_table_to_export': 'No table to export',
        'gantt_success': 'Gantt Chart Generated',
        'hover_for_details': 'You can hover over tasks to view details',
        'gantt_failed': 'Gantt Chart Generation Failed',
        'delete_success': 'Deletion Successful',
        'task_deleted': 'Task has been deleted',
        'operation_success': 'Operation Successful',
        'task_moved_up': 'Task has been moved up',
        'task_moved_down': 'Task has been moved down',
        'hour': 'hour',
        'hours': 'hours',
        'minute': 'minute',
        'minutes': 'minutes',
        
        // 页脚
        'ai_powered': 'AI powered by SMT self-developed large model Smitty. Contact: smtoffice@163.com',
        'copyright': 'Copyright © 2025 Vincent. All rights reserved. No part of this work may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author',
        
        'move_up': 'Move Up',
        'move_down': 'Move Down',
        'delete': 'Delete',
        'confirm_delete': 'Are you sure you want to delete this task?',
        'actions': 'Actions',
        'more_actions': 'More Actions',
    },
    'zh': {
        // 标题和主页元素
        'title': 'AI智能时间计划表',
        'subtitle': '高效管理您的时间',
        'freeform_tab': '自由输入',
        'structured_tab': '结构化输入',
        'plan_input_placeholder': '输入时间计划（示例：周一 10:00-12:00 写代码）',
        'ai_assist_btn': 'AI辅助输入',
        'input_tips_header': '输入提示',
        'standard_format': '标准格式:',
        'standard_format_example': '周一 10:00-12:00 写代码',
        'separator_format': '分隔符格式:',
        'separator_format_example': '写代码 | 周一 | 10:00-12:00',
        'task_priority_format': '任务优先格式:',
        'task_priority_format_example': '写代码 10:00-12:00 周一',
        
        // 结构化输入表单
        'day_label': '星期',
        'please_select': '请选择',
        'monday': '周一',
        'tuesday': '周二',
        'wednesday': '周三',
        'thursday': '周四',
        'friday': '周五',
        'saturday': '周六',
        'sunday': '周日',
        'start_time': '开始时间',
        'end_time': '结束时间',
        'task_name': '任务名称',
        'task_name_placeholder': '例如：写代码',
        'add_task': '添加任务',
        'added_tasks': '已添加的任务',
        
        // 按钮
        'generate_table': '生成表格',
        'export_excel': '导出Excel',
        'clear': '清除',
        
        // AI助手模态框
        'ai_assist_title': 'AI辅助输入',
        'ai_assist_description': '请用自然语言描述您的时间计划，AI将帮您转换为标准格式',
        'input_examples': '输入示例',
        'example_1': '"给我一个一周的详细计划"',
        'example_2': '"星期二早上9点到11点30分学习，下午3点到5点健身"',
        'example_3': '"我想在周三晚上7点到9点看电影"',
        'ai_input_placeholder': '例如：我想在周一上午10点到12点写代码，然后下午2点到4点开会...',
        'ai_processing': 'AI正在处理中...',
        'convert': '转换',
        'cancel': '取消',
        'use_result': '使用此结果',
        
        // 表格和甘特图
        'day_header': '星期',
        'task_header': '任务',
        'start_header': '开始时间',
        'end_header': '结束时间',
        'duration_header': '持续时间',
        'actions_header': '操作',
        'gantt_title': '时间计划甘特图',
        'total_tasks': '共 ',
        'total_tasks_suffix': ' 个任务',
        'download_table': '下载时间表图片',
        'download_gantt': '下载甘特图图片',
        
        // 通知
        'input_error': '输入错误',
        'please_enter_plan': '请输入时间计划',
        'format_error': '格式错误',
        'parsing_error': '无法解析输入的时间计划，请检查格式是否正确',
        'no_data': '暂无数据',
        'conversion_success': '转换成功',
        'applied_result': '已将转换结果应用到输入框',
        'empty_input': '输入为空',
        'enter_schedule_description': '请输入您的时间计划描述',
        'conversion_failed': '转换失败',
        'processing': '正在处理',
        'generating_image': '正在生成图片，请稍候...',
        'download_success': '下载成功',
        'image_generated': '图片已成功生成并下载',
        'screenshot_failed': '截图失败',
        'element_not_found': '找不到要截图的元素',
        'library_not_found': '未找到html2canvas库，请检查是否正确加载',
        'library_load_success': 'html2canvas库已加载，请再次尝试下载',
        'library_load_failed': '无法加载html2canvas库，请检查网络连接',
        'export_error': '导出错误',
        'no_table_to_export': '没有表格可以导出',
        'gantt_success': '甘特图生成成功',
        'hover_for_details': '您可以悬停在任务上查看详细信息',
        'gantt_failed': '甘特图生成失败',
        'delete_success': '删除成功',
        'task_deleted': '任务已删除',
        'operation_success': '操作成功',
        'task_moved_up': '任务已向上移动',
        'task_moved_down': '任务已向下移动',
        'hour': '小时',
        'hours': '小时',
        'minute': '分钟',
        'minutes': '分钟',
        
        // 页脚
        'ai_powered': 'AI由SMT自研大模型Smitty提供支持。问题联系：smtoffice@163.com',
        'copyright': '版权所有 © 2025 Vincent。保留所有权利。未经作者事先书面许可，不得以任何形式或方式复制、分发或传播本作品的任何部分',
        
        'move_up': '向上移动',
        'move_down': '向下移动',
        'delete': '删除',
        'confirm_delete': '确定要删除这个任务吗？',
        'actions': '操作',
        'more_actions': '更多操作',
    }
};

// 当前语言
let currentLang = 'en'; // 默认英文

// 页面加载时检查本地存储
document.addEventListener('DOMContentLoaded', function() {
    // 检查本地存储中是否有语言设置
    const savedLang = localStorage.getItem('language');
    if (savedLang && i18n[savedLang]) {
        currentLang = savedLang;
    }
    
    // 初始化语言
    applyLanguage(currentLang);
    
    // 设置语言切换按钮
    setupLanguageSwitcher();

    loadFromLocalStorage();
    initAIAssistant();
    initStructuredForm();
    
    // 初始化星火API
    initSparkApi();
    
    // 添加全局键盘快捷键
    initKeyboardShortcuts();
    
    // 初始化搜索功能
    initSearchFeature();
});

// 设置语言切换按钮
function setupLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    // 更新按钮文本
    langText.textContent = currentLang === 'en' ? '中文' : 'English';
    
    // 添加点击事件
    langToggle.addEventListener('click', function() {
        // 切换语言
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        currentLang = newLang;
        
        // 保存语言设置到本地存储
        localStorage.setItem('language', newLang);
        
        // 应用新语言
        applyLanguage(newLang);
        
        // 更新按钮文本
        langText.textContent = newLang === 'en' ? '中文' : 'English';
        
        // 显示通知
        const notificationTitle = newLang === 'en' ? 'Language Changed' : '语言已更改';
        const notificationMsg = newLang === 'en' ? 'Changed to English' : '已切换为中文';
        showNotification(notificationTitle, notificationMsg, 'success');
    });
}

// 应用语言到页面元素
function applyLanguage(lang) {
    // 获取语言字典
    const dictionary = i18n[lang] || i18n['en'];
    
    // 更新具有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });
    
    // 更新占位符
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) {
            element.placeholder = dictionary[key];
        }
    });
    
    // 更新工具提示
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (dictionary[key]) {
            element.title = dictionary[key];
        }
    });
    
    // 更新页面标题
    if (dictionary['title']) {
        document.title = dictionary['title'] + ' | ' + dictionary['subtitle'];
    }
    
    // 更新按钮文本
    updateButtonsText(dictionary);
}

// 更新按钮和其他动态元素的文本
function updateButtonsText(dictionary) {
    // 更新"使用此结果"按钮
    const useResultBtn = document.getElementById('useResultBtn');
    if (useResultBtn && dictionary['use_result']) {
        useResultBtn.textContent = dictionary['use_result'];
    }
    
    // 更新下载按钮
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        const btnText = btn.textContent.trim();
        if (btnText.includes('下载时间表') && dictionary['download_table']) {
            btn.innerHTML = `<i class="bx bx-download"></i> ${dictionary['download_table']}`;
        } else if (btnText.includes('下载甘特图') && dictionary['download_gantt']) {
            btn.innerHTML = `<i class="bx bx-download"></i> ${dictionary['download_gantt']}`;
        }
    });
}

// 获取当前语言的翻译
function t(key, defaultText = '') {
    const dictionary = i18n[currentLang] || i18n['en'];
    return dictionary[key] || defaultText;
}

// 初始化星火API
function initSparkApi() {
    if (window.sparkAPI) {
        const apiConfig = {
            appId: "3993bebc",
            apiKey: "b1ac6aed76cef76575745f348445afdc",
            apiSecret: "MGJhNmNhNThlNzQyZmM5MTY5OTRlZjZl",
            uid: "SMTLITE",
            url: "wss://spark-api.xf-yun.com/v1.1/chat",
            domain: "lite"
        };
        
        // 定义系统角色提示词 - 根据当前语言
        window.systemPrompt = currentLang === 'zh' ? 
            `你是一个时间计划助手，帮助用户将自然语言描述的时间计划转换为标准格式，当用户要求给出建议时也可以根据用户的要求生成计划。
            重要：严格按照格式为：周X HH:MM-HH:MM 任务名称
            例如：周一 10:00-12:00 写代码
            请分析用户的输入，提取出时间（转换为24小时制）、星期几和任务名称，然后按照标准格式输出。
            如果用户提到多个任务，请将每个任务单独一行输出。
            如果无法解析某些信息，请尽量推断，实在无法推断则告诉用户错误原因。
            只输出转换后的结果，不要有任何其他解释性文字。
            不要包含前缀、后缀或其他格式内容，直接输出转换后的时间计划格式。
            重要：拒绝回答任何与时间计划无关的问题！！！。` :
            
            `You are a time scheduling assistant, helping users convert natural language descriptions of time schedules into a standard format, and generating schedules based on user requests.
            Important: Use the strict format: Day HH:MM-HH:MM Task
            Example: Monday 10:00-12:00 Coding
            Analyze user input, extract time (in 24-hour format), day of the week, and task name, then output in the standard format.
            If the user mentions multiple tasks, list each task on a separate line.
            If you cannot parse certain information, try to infer it. If inference is impossible, explain the error.
            Output only the converted result, without any explanatory text.
            Do not include prefixes, suffixes, or other formatting content, just output the converted schedule format.
            Important: Refuse to answer any questions unrelated to time scheduling!!!`;
        
        // 初始化API配置
        window.sparkAPI.init(apiConfig);
        
        // 设置回调函数
        window.sparkAPI.setResponseCallback((response, type, isComplete) => {
            console.log('API响应:', response, '类型:', type, '完成状态:', isComplete);
            
            if (type === 'error') {
                // 如果是错误消息，使用本地处理逻辑
                console.log('API返回错误，使用本地处理:', currentUserText);
                processLocally(currentUserText).then(result => {
                    handleApiResult(result, true);
                });
            } else if (type === 'assistant' && isComplete) {
                // 处理完整响应
                console.log('API响应完成，原始结果:', response);
                const processed = cleanupApiResponse(response);
                console.log('处理后结果:', processed);
                handleApiResult(processed, true);
            }
        });
        
        console.log('星火API初始化完成');
    } else {
        console.error('星火API模块未加载');
    }
}

// 存储当前用户文本
let currentUserText = '';

// 处理API结果
function handleApiResult(result, isComplete) {
    if (!isComplete) return;
    
    const aiResult = document.getElementById('aiResult');
    const aiLoading = document.getElementById('aiLoading');
    const aiConvertBtn = document.getElementById('aiConvertBtn');
    const aiCancelBtn = document.getElementById('aiCancelBtn');
    const modalButtons = document.querySelector('.modal-buttons');
    
    // 后处理响应文本，清除多余解释性内容
    let processedResult = cleanupApiResponse(result);
    
    // 显示结果，直接使用简单的文本区域
    aiResult.textContent = processedResult;
    aiResult.style.display = 'block';
    
    // 移除之前可能存在的按钮
    const existingUseBtn = document.getElementById('useResultBtn');
    if (existingUseBtn) {
        existingUseBtn.remove();
    }
    
    // 创建"使用此结果"按钮
    const useResultBtn = document.createElement('button');
    useResultBtn.textContent = t('use_result', '使用此结果');
    useResultBtn.className = 'use-result-btn';
    useResultBtn.id = 'useResultBtn';
    
    useResultBtn.addEventListener('click', function() {
        document.getElementById('planInput').value = processedResult;
        document.getElementById('aiInputModal').style.display = 'none';
        
        // 自动生成表格
        generateTable();
        
        showNotification(t('conversion_success', '已应用'), t('applied_result', '已将转换结果应用到输入框'), 'success');
    });
    
    // 将按钮添加到底部按钮区域
    modalButtons.insertBefore(useResultBtn, aiCancelBtn);
    
    // 隐藏加载状态
    aiLoading.style.display = 'none';
    
    // 恢复按钮状态
    aiConvertBtn.disabled = false;
    aiConvertBtn.innerHTML = `<i class="bx bx-transfer"></i> ${t('convert', '转换')}`;
}

// 清理API响应，确保格式正确
function cleanupApiResponse(text) {
    if (!text) return '';
    
    // 检测敏感关键词
    const sensitiveKeywords = ['科大讯飞', '讯飞', 'iFLYTEK'];
    for (const keyword of sensitiveKeywords) {
        if (text.includes(keyword)) {
            console.log(`检测到敏感关键词: ${keyword}，已自动拦截响应`);
            showNotification('已拦截响应', '检测到不符合规范的回复内容', 'error');
            return '';
        }
    }
    
    // 移除可能的解释性内容
    let processedText = text;
    
    // 移除开头的解释文字（可能包含"以下是"、"好的"、"这是"等开头）
    processedText = processedText.replace(/^(好的|以下是|这是|根据您的描述|我已将|已转换为|转换结果为|转换结果如下)[，。,:：\s]*/i, '');
    
    // 移除含有"标准格式"、"时间计划"等解释性文字的行
    const lines = processedText.split('\n');
    const validLines = lines.filter(line => {
        const trimmed = line.trim();
        // 排除解释性文字行
        return trimmed && 
               !trimmed.match(/^(标准格式|时间计划|转换后|转换为|转换结果|结果如下)/i) &&
               !trimmed.match(/^(这里是|请参考|希望帮到您|还有其他需要|希望这个)/i);
    });
    
    // 验证每行格式是否符合"周X HH:MM-HH:MM 任务名称"
    const formattedLines = validLines.map(line => {
        const trimmed = line.trim();
        // 如果已经符合格式，直接返回
        if (trimmed.match(/^(周[一二三四五六日]|星期[一二三四五六日])\s+\d{1,2}:\d{2}-\d{1,2}:\d{2}\s+.+$/)) {
            return trimmed;
        }
        
        // 如果包含日期和时间信息但格式不正确，尝试修正
        const dayMatch = trimmed.match(/(周[一二三四五六日]|星期[一二三四五六日])/);
        const timeMatch = trimmed.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
        
        if (dayMatch && timeMatch) {
            // 抽取任务名称（假设任务名称是除了日期和时间之外的内容）
            let task = trimmed
                .replace(dayMatch[0], '')
                .replace(timeMatch[0], '')
                .replace(/[,，:：.。]*/g, '')
                .trim();
            
            // 重新组合为规范格式
            return `${dayMatch[0]} ${timeMatch[0]} ${task}`;
        }
        
        // 如果无法修正，保持原样
        return trimmed;
    });
    
    return formattedLines.join('\n');
}

// 初始化AI助手功能
function initAIAssistant() {
    const aiAssistBtn = document.getElementById('aiAssistBtn');
    const aiInputModal = document.getElementById('aiInputModal');
    const closeModal = document.querySelector('.close-modal');
    const aiConvertBtn = document.getElementById('aiConvertBtn');
    const aiCancelBtn = document.getElementById('aiCancelBtn');
    const aiInputText = document.getElementById('aiInputText');
    const aiResult = document.getElementById('aiResult');
    const aiLoading = document.getElementById('aiLoading');
    const planInput = document.getElementById('planInput');
    
    // 打开模态框
    aiAssistBtn.addEventListener('click', function() {
        aiInputModal.style.display = 'block';
        
        // 自动获取主输入框中的文字
        const mainInputText = planInput.value.trim();
        if (mainInputText) {
            aiInputText.value = mainInputText;
        }
        
        aiInputText.focus();
        aiResult.style.display = 'none';
        aiResult.textContent = '';
        aiLoading.style.display = 'none';
        
        // 移除可能存在的"使用此结果"按钮
        const existingUseBtn = document.getElementById('useResultBtn');
        if (existingUseBtn) {
            existingUseBtn.remove();
        }
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', function() {
        aiInputModal.style.display = 'none';
    });
    
    aiCancelBtn.addEventListener('click', function() {
        aiInputModal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === aiInputModal) {
            aiInputModal.style.display = 'none';
        }
    });
    
    // 转换按钮点击事件
    aiConvertBtn.addEventListener('click', function() {
        const naturalText = aiInputText.value.trim();
        if (!naturalText) {
            showNotification(t('empty_input', '输入为空'), t('enter_schedule_description', '请输入您的时间计划描述'), 'error');
            return;
        }
        
        // 显示加载状态
        aiLoading.style.display = 'block';
        aiResult.style.display = 'none';
        aiConvertBtn.disabled = true;
        aiConvertBtn.innerHTML = `<i class="bx bx-loader-alt bx-spin"></i> ${t('processing', '处理中...')}`;
        
        // 保存当前用户文本
        currentUserText = naturalText;
        
        // 调用讯飞星火API处理
        processWithSparkAPI(naturalText)
            .catch(error => {
                console.error('AI处理错误:', error);
                aiResult.textContent = t('conversion_failed', '转换失败') + ': ' + error.message;
                aiResult.style.display = 'block';
                aiLoading.style.display = 'none';
                
                showNotification(t('conversion_failed', '转换失败'), error.message, 'error');
                
                // 恢复按钮状态
                aiConvertBtn.disabled = false;
                aiConvertBtn.innerHTML = `<i class="bx bx-transfer"></i> ${t('convert', '转换')}`;
            });
    });
    
    // 添加键盘快捷键
    aiInputText.addEventListener('keydown', function(e) {
        // Ctrl+Enter 触发转换
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            aiConvertBtn.click();
        }
    });
}

// 讯飞星火API处理函数
async function processWithSparkAPI(text) {
    try {
        if (window.sparkAPI) {
            // 使用新的星火API模块发送消息
            await window.sparkAPI.sendMessage(text);
            return Promise.resolve(); // 返回空Promise，结果会通过回调处理
        } else {
            console.warn('星火API模块未加载，使用本地处理');
            return await processLocally(text);
        }
    } catch (error) {
        console.error('星火API处理错误:', error);
        showNotification('API调用失败', '正在使用本地处理逻辑', 'error');
        return await processLocally(text);
    }
}

// 本地处理逻辑
async function processLocally(text) {
    console.log('开始本地处理:', text);
    
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 简单的规则转换
    let result = '';
    
    // 分割句子
    const sentences = text.split(/[,，.。;；!！?？]/g).filter(s => s.trim());
    
    for (const sentence of sentences) {
        if (!sentence.trim()) continue;
        
        // 提取星期信息
        let day = '';
        const dayMatch = sentence.match(/(周|星期)([一二三四五六日天])/);
        if (dayMatch) {
            day = dayMatch[0];
            // 将"天"转换为"日"
            if (day.endsWith('天')) {
                day = day.replace('天', '日');
            }
        }
        
        // 提取时间信息
        let timeRange = '';
        
        // 匹配"上午/下午/晚上 + 数字 + 点"格式
        const timeMatch = sentence.match(/(上午|下午|晚上)(\d{1,2})点(?:到|至|-)(?:上午|下午|晚上)?(\d{1,2})点/);
        if (timeMatch) {
            const period1 = timeMatch[1];
            let hour1 = parseInt(timeMatch[2]);
            let hour2 = parseInt(timeMatch[3]);
            
            // 转换为24小时制
            if (period1 === '下午' && hour1 < 12) hour1 += 12;
            if (period1 === '晚上' && hour1 < 12) hour1 += 12;
            
            // 如果第二个时间没有指定上午/下午，则假设与第一个时间相同
            if (hour2 < hour1 && hour2 < 12) hour2 += 12;
            
            timeRange = `${hour1.toString().padStart(2, '0')}:00-${hour2.toString().padStart(2, '0')}:00`;
        } else {
            // 匹配"数字:数字-数字:数字"格式
            const directTimeMatch = sentence.match(/(\d{1,2})[:.：](\d{2})(?:\s*[-~到至]\s*)(\d{1,2})[:.：](\d{2})/);
            if (directTimeMatch) {
                const hour1 = parseInt(directTimeMatch[1]);
                const min1 = parseInt(directTimeMatch[2]);
                const hour2 = parseInt(directTimeMatch[3]);
                const min2 = parseInt(directTimeMatch[4]);
                
                timeRange = `${hour1.toString().padStart(2, '0')}:${min1.toString().padStart(2, '0')}-${hour2.toString().padStart(2, '0')}:${min2.toString().padStart(2, '0')}`;
            }
        }
        
        // 提取任务名称
        let task = '';
        if (day && timeRange) {
            // 移除句子中的日期和时间信息，剩下的可能是任务描述
            task = sentence
                .replace(dayMatch[0], '')
                .replace(timeMatch[0], '')
                .replace(/[,，:：]/, '')
                .trim();
            
            // 提取关键动词和名词作为任务名称
            const keywords = ['学习', '工作', '开会', '写', '读', '复习', '准备', '讨论', '设计', '编程', '编码', '写代码', '健身', '锻炼', '休息'];
            
            for (const keyword of keywords) {
                if (task.includes(keyword)) {
                    // 提取包含关键词的短语
                    const keywordIndex = task.indexOf(keyword);
                    const phraseStart = Math.max(0, keywordIndex - 5);
                    const phraseEnd = Math.min(task.length, keywordIndex + keyword.length + 10);
                    task = task.substring(phraseStart, phraseEnd).trim();
                    break;
                }
            }
            
            // 如果没有找到任务描述，使用默认值
            if (!task) {
                task = '未命名任务';
            }
            
            // 格式化为标准格式
            result += `${day} ${timeRange} ${task}\n`;
        }
    }
    
    console.log('本地处理结果:', result);
    return result.trim() || '无法解析您的描述，请尝试更明确的表述，例如："周一上午10点到12点写代码"';
}

// 解析输入文本
function parseInput(text) {
    const lines = text.trim().split('\n');
    const tasks = [];
    
    // 支持多种输入格式
    const patterns = [
        // 格式1: 周一 10:00-12:00 写代码
        /^(周[一二三四五六日]|星期[一二三四五六日])\s+(\d{1,2}:\d{2})-(\d{1,2}:\d{2})\s+(.+)$/,
        // 格式2: 写代码 | 周一 | 10:00-12:00
        /^(.+)\s*\|\s*(周[一二三四五六日]|星期[一二三四五六日])\s*\|\s*(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/,
        // 格式3: 写代码 10:00-12:00 周一
        /^(.+)\s+(\d{1,2}:\d{2})-(\d{1,2}:\d{2})\s+(周[一二三四五六日]|星期[一二三四五六日])$/
    ];
    
    lines.forEach(line => {
        if (!line.trim()) return;
        
        let matched = false;
        
        // 尝试匹配不同格式
        for (const pattern of patterns) {
            const match = line.match(pattern);
            if (match) {
                matched = true;
                
                // 根据匹配的格式提取信息
                if (pattern === patterns[0]) {
                    tasks.push({
                        day: match[1],
                        start: match[2],
                        end: match[3],
                        task: match[4],
                        duration: calculateDuration(match[2], match[3])
                    });
                } else if (pattern === patterns[1]) {
                    tasks.push({
                        task: match[1],
                        day: match[2],
                        start: match[3],
                        end: match[4],
                        duration: calculateDuration(match[3], match[4])
                    });
                } else if (pattern === patterns[2]) {
                    tasks.push({
                        task: match[1],
                        start: match[2],
                        end: match[3],
                        day: match[4],
                        duration: calculateDuration(match[2], match[3])
                    });
                }
                break;
            }
        }
        
        // 如果没有匹配任何格式，尝试更宽松的匹配
        if (!matched) {
            try {
                // 尝试提取时间格式 (HH:MM-HH:MM)
                const timeMatch = line.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
                if (timeMatch) {
                    // 尝试提取星期
                    let day = '';
                    const dayMatch = line.match(/(周[一二三四五六日]|星期[一二三四五六日])/);
                    if (dayMatch) {
                        day = dayMatch[1];
                    }
                    
                    // 如果没有找到星期但有现有任务，使用上一个任务的星期
                    if (!day && tasks.length > 0) {
                        day = tasks[tasks.length - 1].day;
                    }
                    
                    // 如果还是没有星期，设为默认值
                    if (!day) {
                        day = '未指定';
                    }
                    
                    // 提取任务名称 (假设任务名称是剩余的文本)
                    let taskName = line
                        .replace(timeMatch[0], '')
                        .replace(day, '')
                        .replace(/[,，:：]/, '')
                        .trim();
                    
                    tasks.push({
                        day: day,
                        start: timeMatch[1],
                        end: timeMatch[2],
                        task: taskName || '未命名任务',
                        duration: calculateDuration(timeMatch[1], timeMatch[2])
                    });
                }
            } catch (error) {
                console.error('解析行出错:', line, error);
                // 解析错误时，不添加任务，继续处理下一行
            }
        }
    });
    
    return tasks;
}

// 计算时间段的持续时间
function calculateDuration(start, end) {
    const [startHour, startMin] = start.split(':').map(Number);
    const [endHour, endMin] = end.split(':').map(Number);
    
    let durationMinutes = (endHour * 60 + endMin) - (startHour * 60 + startMin);
    if (durationMinutes < 0) durationMinutes += 24 * 60; // 跨天处理
    
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    
    // 根据当前语言返回不同格式
    if (currentLang === 'zh') {
        return `${hours}小时${minutes > 0 ? minutes + '分钟' : ''}`;
    } else {
        // 英文版本根据单复数使用不同的词
        const hourText = hours === 1 ? t('hour', 'hour') : t('hours', 'hours');
        const minuteText = minutes === 1 ? t('minute', 'minute') : t('minutes', 'minutes');
        return `${hours} ${hourText}${minutes > 0 ? ' ' + minutes + ' ' + minuteText : ''}`;
    }
}

// 检查时间冲突
function checkConflicts(tasks) {
    // 按天分组
    const tasksByDay = {};
    tasks.forEach(task => {
        if (!tasksByDay[task.day]) {
            tasksByDay[task.day] = [];
        }
        tasksByDay[task.day].push(task);
    });
    
    // 检查每天内的冲突
    for (const day in tasksByDay) {
        const dayTasks = tasksByDay[day];
        for (let i = 0; i < dayTasks.length; i++) {
            const task1 = dayTasks[i];
            const [startHour1, startMin1] = task1.start.split(':').map(Number);
            const [endHour1, endMin1] = task1.end.split(':').map(Number);
            const startTime1 = startHour1 * 60 + startMin1;
            const endTime1 = endHour1 * 60 + endMin1;
            
            for (let j = i + 1; j < dayTasks.length; j++) {
                const task2 = dayTasks[j];
                const [startHour2, startMin2] = task2.start.split(':').map(Number);
                const [endHour2, endMin2] = task2.end.split(':').map(Number);
                const startTime2 = startHour2 * 60 + startMin2;
                const endTime2 = endHour2 * 60 + endMin2;
                
                // 检查是否有重叠
                if ((startTime1 < endTime2 && endTime1 > startTime2) || 
                    (startTime2 < endTime1 && endTime2 > startTime1)) {
                    task1.hasConflict = true;
                    task2.hasConflict = true;
                }
            }
        }
    }
    
    return tasks;
}

// 生成表格
function generateTable() {
    const inputText = document.getElementById('planInput').value;
    if (!inputText.trim()) {
        showNotification(t('input_error', '输入错误'), t('please_enter_plan', '请输入时间计划'), 'error');
        return;
    }
    
    let newTasks = parseInput(inputText);
    
    // 获取现有表格中的任务
    const existingTasks = getExistingTasks();
    
    // 合并任务（避免重复）
    let tasks = mergeTaskLists(existingTasks, newTasks);
    
    tasks = checkConflicts(tasks);
    
    const tableContainer = document.getElementById('tableContainer');
    
    if (tasks.length === 0) {
        showNotification(t('format_error', '格式错误'), t('parsing_error', '无法解析输入的时间计划，请检查格式是否正确'), 'error');
        if (tableContainer.innerHTML === '') {
            tableContainer.innerHTML = `<div class="empty-state"><i class="bx bx-calendar-x"></i><p>${t('no_data', '暂无数据')}</p></div>`;
        }
        return;
    }
    
    // 创建表格
    const table = document.createElement('table');
    
    // 创建表头
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    [
        t('day_header', '星期'), 
        t('task_header', '任务'), 
        t('start_header', '开始时间'), 
        t('end_header', '结束时间'), 
        t('duration_header', '持续时间'), 
        t('actions_header', '操作')
    ].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // 创建表体
    const tbody = document.createElement('tbody');
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.dataset.taskIndex = index; // 添加任务索引，方便后续操作
        
        // 星期
        const dayCell = document.createElement('td');
        dayCell.textContent = task.day;
        row.appendChild(dayCell);
        
        // 任务
        const taskCell = document.createElement('td');
        taskCell.textContent = task.task;
        taskCell.setAttribute('contenteditable', 'true');
        taskCell.addEventListener('blur', saveDataToLocalStorage);
        row.appendChild(taskCell);
        
        // 开始时间
        const startCell = document.createElement('td');
        startCell.textContent = task.start;
        row.appendChild(startCell);
        
        // 结束时间
        const endCell = document.createElement('td');
        endCell.textContent = task.end;
        row.appendChild(endCell);
        
        // 持续时间
        const durationCell = document.createElement('td');
        durationCell.textContent = task.duration;
        row.appendChild(durationCell);
        
        // 操作按钮单元格
        const actionCell = document.createElement('td');
        actionCell.className = 'task-actions actions-cell';
        
        // 创建操作按钮
        const actionsMenuBtn = document.createElement('button');
        actionsMenuBtn.className = 'actions-menu-btn';
        actionsMenuBtn.innerHTML = '<i class="bx bx-dots-vertical-rounded"></i>';
        actionsMenuBtn.title = t('more_actions', '更多操作');
        actionsMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // 关闭所有其他菜单
            document.querySelectorAll('.actions-menu.show').forEach(menu => {
                if (menu !== actionsMenu) {
                    menu.classList.remove('show');
                }
            });
            // 切换当前菜单显示状态
            actionsMenu.classList.toggle('show');
        });
        
        // 创建下拉菜单
        const actionsMenu = document.createElement('div');
        actionsMenu.className = 'actions-menu';
        
        // 上移操作
        const moveUpAction = document.createElement('div');
        moveUpAction.className = 'action-item';
        moveUpAction.innerHTML = '<i class="bx bx-up-arrow-alt"></i>' + t('move_up', '向上移动');
        moveUpAction.addEventListener('click', function() {
            const prevRow = row.previousElementSibling;
            if (prevRow) {
                tbody.insertBefore(row, prevRow);
                updatePlanInputFromTable();
                generateTable();
                showNotification(t('operation_success', '操作成功'), t('task_moved_up', '任务已向上移动'), 'success');
            }
            actionsMenu.classList.remove('show');
        });
        
        // 下移操作
        const moveDownAction = document.createElement('div');
        moveDownAction.className = 'action-item';
        moveDownAction.innerHTML = '<i class="bx bx-down-arrow-alt"></i>' + t('move_down', '向下移动');
        moveDownAction.addEventListener('click', function() {
            const nextRow = row.nextElementSibling;
            if (nextRow) {
                tbody.insertBefore(nextRow, row);
                updatePlanInputFromTable();
                generateTable();
                showNotification(t('operation_success', '操作成功'), t('task_moved_down', '任务已向下移动'), 'success');
            }
            actionsMenu.classList.remove('show');
        });
        
        // 删除操作
        const deleteAction = document.createElement('div');
        deleteAction.className = 'action-item delete-action';
        deleteAction.innerHTML = '<i class="bx bx-trash-alt"></i>' + t('delete', '删除');
        deleteAction.addEventListener('click', function() {
            if (confirm(t('confirm_delete', '确定要删除这个任务吗？'))) {
                row.remove();
                updatePlanInputFromTable();
                generateTable();
                showNotification(t('delete_success', '删除成功'), t('task_deleted', '任务已删除'), 'success');
            }
            actionsMenu.classList.remove('show');
        });
        
        // 添加操作项到菜单
        actionsMenu.appendChild(moveUpAction);
        actionsMenu.appendChild(moveDownAction);
        actionsMenu.appendChild(deleteAction);
        
        // 添加按钮和菜单到单元格
        actionCell.appendChild(actionsMenuBtn);
        actionCell.appendChild(actionsMenu);
        row.appendChild(actionCell);
        
        // 添加冲突标记
        if (task.hasConflict) {
            row.classList.add('conflict');
            row.title = t('conflict_warning', '警告：此任务与其他任务时间冲突');
        }
        
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    
    // 移除之前的事件监听器，防止重复添加
    document.removeEventListener('click', closeAllMenus);
    
    // 点击页面任何地方关闭所有菜单
    document.addEventListener('click', closeAllMenus);
    
    tableContainer.innerHTML = ''; // 这里仍然清空，但我们已经保存了之前的任务
    tableContainer.appendChild(table);
    
    // 启用导出按钮
    document.getElementById('exportBtn').disabled = false;
    
    // 保存到本地存储
    saveDataToLocalStorage();
    
    // 生成甘特图
    generateGanttChart(tasks);
}

// 全局关闭菜单的函数
function closeAllMenus(e) {
    if (!e.target.closest('.actions-cell')) {
        document.querySelectorAll('.actions-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
    }
}

// 获取已有表格中的任务
function getExistingTasks() {
    const table = document.querySelector('#tableContainer table');
    if (!table) return [];
    
    const tasks = [];
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 5) {
            tasks.push({
                day: cells[0].textContent,
                task: cells[1].textContent,
                start: cells[2].textContent,
                end: cells[3].textContent,
                duration: cells[4].textContent,
                hasConflict: row.classList.contains('conflict')
            });
        }
    });
    
    return tasks;
}

// 合并任务列表，避免重复
function mergeTaskLists(existingTasks, newTasks) {
    if (existingTasks.length === 0) return newTasks;
    if (newTasks.length === 0) return existingTasks;
    
    // 创建任务的唯一标识符
    const createTaskKey = (task) => `${task.day}-${task.start}-${task.end}-${task.task}`;
    
    // 用于检测重复的集合
    const taskKeys = new Set();
    
    // 添加现有任务的键
    existingTasks.forEach(task => {
        taskKeys.add(createTaskKey(task));
    });
    
    // 合并新任务，排除重复
    const result = [...existingTasks];
    
    newTasks.forEach(newTask => {
        const key = createTaskKey(newTask);
        if (!taskKeys.has(key)) {
            result.push(newTask);
            taskKeys.add(key);
        }
    });
    
    return result;
}

// 生成甘特图
function generateGanttChart(tasks) {
    const ganttContainer = document.getElementById('ganttContainer');
    ganttContainer.innerHTML = ''; // 清空容器
    
    if (tasks.length === 0) {
        ganttContainer.innerHTML = `
            <div class="empty-state">
                <i class='bx bx-calendar-x'></i>
                <p>没有任务数据可以显示</p>
            </div>
        `;
        return;
    }
    
    // 按天分组任务并排序
    const dayOrder = {
        '周一': 1, '星期一': 1,
        '周二': 2, '星期二': 2,
        '周三': 3, '星期三': 3,
        '周四': 4, '星期四': 4,
        '周五': 5, '星期五': 5,
        '周六': 6, '星期六': 6,
        '周日': 7, '星期日': 7
    };
    
    // 按星期排序任务
    tasks.sort((a, b) => {
        const dayA = dayOrder[a.day] || 999;
        const dayB = dayOrder[b.day] || 999;
        if (dayA !== dayB) return dayA - dayB;
        
        // 如果星期相同，按开始时间排序
        const [startHourA, startMinA] = a.start.split(':').map(Number);
        const [startHourB, startMinB] = b.start.split(':').map(Number);
        const startTimeA = startHourA * 60 + startMinA;
        const startTimeB = startHourB * 60 + startMinB;
        return startTimeA - startTimeB;
    });
    
    // 准备数据
    const chartData = [];
    const yAxisData = [];
    
    tasks.forEach(task => {
        // 转换时间为分钟数，用于图表显示
        const [startHour, startMin] = task.start.split(':').map(Number);
        const [endHour, endMin] = task.end.split(':').map(Number);
        
        const startValue = startHour * 60 + startMin;
        let endValue = endHour * 60 + endMin;
        
        // 处理跨天情况
        if (endValue < startValue) {
            endValue += 24 * 60;
        }
        
        // 添加到图表数据
        chartData.push({
            name: task.task,
            value: [yAxisData.length, startValue, endValue],
            itemStyle: {
                color: task.hasConflict ? 'var(--danger-color)' : 'var(--primary-color)',
                borderColor: task.hasConflict ? 'var(--danger-color)' : 'var(--primary-color)',
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        });
        
        yAxisData.push(`${task.day} ${task.task}`);
    });
    
    // 创建图表容器
    const chartElement = document.createElement('div');
    chartElement.style.width = '100%';
    chartElement.style.height = '100%';
    ganttContainer.appendChild(chartElement);
    
    // 初始化ECharts实例
    try {
        const chart = echarts.init(chartElement);
        
        // 配置项
        const option = {
            tooltip: {
                formatter: function(params) {
                    const startMinutes = params.value[1];
                    const endMinutes = params.value[2];
                    
                    const startHour = Math.floor(startMinutes / 60);
                    const startMin = startMinutes % 60;
                    const endHour = Math.floor(endMinutes / 60) % 24; // 处理跨天
                    const endMin = endMinutes % 60;
                    
                    const formatTime = (h, m) => `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                    
                    return `<div style="font-weight:bold;margin-bottom:5px;">${params.name}</div>
                            <div>时间: ${formatTime(startHour, startMin)} - ${formatTime(endHour, endMin)}</div>
                            <div>持续: ${calculateDuration(formatTime(startHour, startMin), formatTime(endHour, endMin))}</div>`;
                },
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#e9ecef',
                borderWidth: 1,
                textStyle: {
                    color: 'var(--text-color)'
                },
                extraCssText: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 8px; padding: 10px;'
            },
            title: {
                text: t('gantt_title', '时间计划甘特图'),
                left: 'center',
                textStyle: {
                    color: 'var(--text-color)',
                    fontWeight: 'bold',
                    fontSize: 16
                },
                subtext: currentLang === 'zh' 
                    ? `${t('total_tasks', '共')} ${tasks.length} ${t('total_tasks_suffix', '个任务')}`
                    : `${t('total_tasks', 'Total tasks:')} ${tasks.length}`,
                subtextStyle: {
                    color: 'var(--text-light)'
                }
            },
            grid: {
                height: Math.max(200, tasks.length * 40),
                left: 150,
                right: 20,
                bottom: 20,
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    formatter: function(val) {
                        const hours = Math.floor(val / 60) % 24;
                        const minutes = val % 60;
                        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
                    },
                    color: 'var(--text-light)'
                },
                min: 0,
                max: 24 * 60,
                interval: 60,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#f1f3f5',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#e9ecef'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: yAxisData,
                axisLabel: {
                    interval: 0,
                    margin: 10,
                    color: 'var(--text-color)',
                    formatter: function(value) {
                        // 限制标签长度，防止过长
                        if (value.length > 20) {
                            return value.substring(0, 20) + '...';
                        }
                        return value;
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#e9ecef'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            series: [{
                type: 'custom',
                renderItem: function(params, api) {
                    const categoryIndex = api.value(0);
                    const start = api.coord([api.value(1), categoryIndex]);
                    const end = api.coord([api.value(2), categoryIndex]);
                    const height = api.size([0, 1])[1] * 0.6;
                    
                    const rectShape = echarts.graphic.clipRectByRect({
                        x: start[0],
                        y: start[1] - height / 2,
                        width: Math.max(end[0] - start[0], 5), // 确保宽度至少为5px
                        height: height
                    }, {
                        x: params.coordSys.x,
                        y: params.coordSys.y,
                        width: params.coordSys.width,
                        height: params.coordSys.height
                    });
                    
                    return rectShape && {
                        type: 'rect',
                        shape: {
                            ...rectShape,
                            r: 4 // 圆角
                        },
                        style: api.style({
                            shadowBlur: 5,
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 2
                        })
                    };
                },
                itemStyle: {
                    borderRadius: 4
                },
                data: chartData
            }]
        };
        
        // 使用配置项显示图表
        chart.setOption(option);
        
        // 响应窗口大小变化
        window.addEventListener('resize', function() {
            chart.resize();
        });
        
        // 添加下载按钮容器
        const existingDownloadBtns = document.querySelector('.download-buttons');
        if (!existingDownloadBtns) {
            const downloadBtnsContainer = document.createElement('div');
            downloadBtnsContainer.className = 'download-buttons';
            downloadBtnsContainer.style.marginTop = '20px';
            downloadBtnsContainer.style.textAlign = 'center';
            
            // 创建下载时间表按钮
            const downloadTableBtn = document.createElement('button');
            downloadTableBtn.className = 'download-btn';
            downloadTableBtn.innerHTML = `<i class="bx bx-download"></i> ${t('download_table', '下载时间表图片')}`;
            downloadTableBtn.onclick = function() {
                captureElement('tableContainer', t('table_filename', '时间计划表'));
            };
            
            // 创建下载甘特图按钮
            const downloadGanttBtn = document.createElement('button');
            downloadGanttBtn.className = 'download-btn';
            downloadGanttBtn.innerHTML = `<i class="bx bx-download"></i> ${t('download_gantt', '下载甘特图图片')}`;
            downloadGanttBtn.onclick = function() {
                captureElement('ganttContainer', t('gantt_filename', '时间计划甘特图'));
            };
            
            // 添加按钮到容器
            downloadBtnsContainer.appendChild(downloadTableBtn);
            downloadBtnsContainer.appendChild(downloadGanttBtn);
            
            // 添加按钮容器到甘特图容器之后
            ganttContainer.parentNode.insertBefore(downloadBtnsContainer, ganttContainer.nextSibling);
        }
        
        // 显示成功通知
        showNotification('甘特图生成成功', '您可以悬停在任务上查看详细信息', 'success');
    } catch (error) {
        console.error('甘特图生成错误:', error);
        ganttContainer.innerHTML = `
            <div class="empty-state">
                <i class='bx bx-error-circle'></i>
                <p>甘特图生成失败</p>
                <small>${error.message}</small>
            </div>
        `;
        showNotification('甘特图生成失败', error.message, 'error');
    }
}

// 截图并下载元素为图片
function captureElement(elementId, fileName) {
    const element = document.getElementById(elementId);
    if (!element) {
        showNotification(t('screenshot_failed', '截图失败'), t('element_not_found', '找不到要截图的元素'), 'error');
        return;
    }
    
    // 检查是否加载了html2canvas库
    if (typeof html2canvas !== 'function') {
        showNotification(t('screenshot_failed', '截图失败'), t('library_not_found', '未找到html2canvas库，请检查是否正确加载'), 'error');
        loadHtml2Canvas(); // 尝试动态加载库
        return;
    }
    
    showNotification(t('processing', '正在处理'), t('generating_image', '正在生成图片，请稍候...'), 'success');
    
    html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2, // 提高分辨率
        logging: false,
        useCORS: true,
        allowTaint: true
    }).then(function(canvas) {
        // 转换为图片并下载
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = fileName + '.png';
        link.click();
        
        showNotification(t('download_success', '下载成功'), t('image_generated', '图片已成功生成并下载'), 'success');
    }).catch(function(error) {
        console.error('截图错误:', error);
        showNotification(t('screenshot_failed', '截图失败'), error.message, 'error');
    });
}

// 动态加载html2canvas库
function loadHtml2Canvas() {
    if (document.getElementById('html2canvas-script')) return;
    
    const script = document.createElement('script');
    script.id = 'html2canvas-script';
    script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
    script.onload = function() {
        showNotification('库加载成功', 'html2canvas库已加载，请再次尝试下载', 'success');
    };
    script.onerror = function() {
        showNotification('库加载失败', '无法加载html2canvas库，请检查网络连接', 'error');
    };
    document.head.appendChild(script);
}

// 显示通知
function showNotification(title, message, type = 'success') {
    // 移除现有通知
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class='bx ${type === 'success' ? 'bx-check' : 'bx-x'}'></i>
        </div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <div class="notification-close">
            <i class='bx bx-x'></i>
        </div>
    `;
    
    // 添加到文档
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 添加关闭事件
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
    
    // 自动关闭
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    notification.remove();
                }
            }, 500);
        }
    }, 5000);
}

// 导出为Excel
function exportToExcel() {
    const table = document.querySelector('table');
    if (!table) {
        showNotification('导出错误', '没有表格可以导出', 'error');
        return;
    }
    
    // 使用SheetJS库导出
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, '时间计划表.xlsx');
}

// 清除所有内容
function clearAll() {
    document.getElementById('planInput').value = '';
    document.getElementById('tableContainer').innerHTML = '';
    document.getElementById('ganttContainer').innerHTML = '';
    document.getElementById('exportBtn').disabled = true;
    
    // 清除本地存储
    localStorage.removeItem('timeScheduleInput');
    localStorage.removeItem('timeScheduleTable');
}

// 保存数据到本地存储
function saveDataToLocalStorage() {
    const inputText = document.getElementById('planInput').value;
    const tableHTML = document.getElementById('tableContainer').innerHTML;
    
    localStorage.setItem('timeScheduleInput', inputText);
    localStorage.setItem('timeScheduleTable', tableHTML);
}

// 从本地存储加载数据
function loadFromLocalStorage() {
    const savedInput = localStorage.getItem('timeScheduleInput');
    const savedTable = localStorage.getItem('timeScheduleTable');
    
    if (savedInput) {
        document.getElementById('planInput').value = savedInput;
    }
    
    if (savedTable) {
        document.getElementById('tableContainer').innerHTML = savedTable;
        document.getElementById('exportBtn').disabled = false;
        
        // 重新绑定可编辑单元格的事件
        const editableCells = document.querySelectorAll('td[contenteditable="true"]');
        editableCells.forEach(cell => {
            cell.addEventListener('blur', saveDataToLocalStorage);
        });
        
        // 重新生成甘特图
        if (savedInput) {
            const tasks = parseInput(savedInput);
            generateGanttChart(tasks);
        }
    }
}

// 初始化结构化表单
function initStructuredForm() {
    // 选项卡切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新内容显示
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // 添加任务按钮事件
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const daySelect = document.getElementById('daySelect');
    const startTime = document.getElementById('startTime');
    const endTime = document.getElementById('endTime');
    const taskName = document.getElementById('taskName');
    
    addTaskBtn.addEventListener('click', function() {
        // 验证表单
        if (!daySelect.value) {
            showNotification('输入错误', '请选择星期', 'error');
            return;
        }
        if (!startTime.value) {
            showNotification('输入错误', '请选择开始时间', 'error');
            return;
        }
        if (!endTime.value) {
            showNotification('输入错误', '请选择结束时间', 'error');
            return;
        }
        if (!taskName.value.trim()) {
            showNotification('输入错误', '请输入任务名称', 'error');
            return;
        }
        
        // 检查时间是否合理
        const start = startTime.value;
        const end = endTime.value;
        if (start >= end) {
            showNotification('输入错误', '结束时间必须晚于开始时间', 'error');
            return;
        }
        
        // 创建任务项
        const taskItem = document.createElement('li');
        const taskInfo = document.createElement('div');
        taskInfo.className = 'task-info';
        taskInfo.textContent = `${daySelect.value} ${start}-${end} ${taskName.value.trim()}`;
        
        // 创建删除按钮
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-task';
        deleteBtn.textContent = '删除';
        deleteBtn.onclick = function() {
            taskItem.remove();
            updatePlanInput();
        };
        
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        
        // 更新主输入框
        updatePlanInput();
        
        // 清空表单
        taskName.value = '';
        startTime.value = '';
        endTime.value = '';
        daySelect.selectedIndex = 0;
    });
}

// 更新主输入框的内容
function updatePlanInput() {
    const taskItems = document.querySelectorAll('#taskList .task-info');
    const planInput = document.getElementById('planInput');
    
    let text = '';
    taskItems.forEach(item => {
        text += item.textContent + '\n';
    });
    
    planInput.value = text.trim();
    
    // 如果有任务，自动生成表格
    if (text.trim()) {
        generateTable();
    }
} 