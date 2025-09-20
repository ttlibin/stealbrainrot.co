// 批量修复所有语言页面的语言管理器初始化问题
const fs = require('fs');
const path = require('path');

const languages = ['zh-cn', 'es', 'ar', 'ko', 'ja', 'de', 'fr'];

// 处理每个语言页面
languages.forEach(lang => {
    const filePath = path.join(__dirname, lang, 'index.html');
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 替换语言选择器初始化逻辑
        const oldInit = `setTimeout(() => {
                    console.log('Initializing language selector...');
                    console.log('Language manager available:', typeof languageManager !== 'undefined');
                    initLanguageSelector();
                }, 100);`;
        
        const newInit = `waitForLanguageManager();`;
        
        content = content.replace(oldInit, newInit);
        
        // 添加等待语言管理器的函数
        const waitFunction = `// 等待语言管理器加载后初始化
        function waitForLanguageManager() {
            if (typeof languageManager !== 'undefined' && languageManager) {
                console.log('Language manager is ready, initializing selector...');
                initLanguageSelector();
            } else {
                console.log('Waiting for language manager...');
                setTimeout(waitForLanguageManager, 100);
            }
        }
        
        `;
        
        // 在初始化代码之前插入等待函数
        const initPattern = /\/\/ 等待语言管理器加载后初始化/;
        if (initPattern.test(content)) {
            content = content.replace(initPattern, waitFunction + '// 等待语言管理器加载后初始化');
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated language manager initialization in ${lang}/index.html`);
    } else {
        console.log(`❌ File not found: ${lang}/index.html`);
    }
});

console.log('🔄 All language manager initializations updated!');
