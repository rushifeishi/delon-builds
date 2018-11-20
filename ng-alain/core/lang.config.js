"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
exports.LANGS_CONFIG = [
    {
        langs: ['zh-Hans', 'zh-cn', 'zh-Hans-CN', 'zh'],
        zorro: 'zh_CN',
        delon: 'zh_CN',
        fileName: 'zh-CN.json',
    },
    {
        langs: ['zh-Hant', 'zh-tw', 'zh-Hant-TW'],
        zorro: 'zh_TW',
        delon: 'zh_TW',
        fileName: 'zh-TW.json',
    },
    { langs: ['en'], zorro: 'en_US', delon: 'en_US', fileName: 'en-US.json' },
];
function getLangConfig(lang) {
    return exports.LANGS_CONFIG.find(w => w.langs.includes(lang));
}
exports.getLangConfig = getLangConfig;
function getLangData(lang) {
    let langCog = getLangConfig(lang);
    if (!langCog || !langCog.fileName) {
        langCog = getLangConfig('zh');
    }
    console.log(`Currently using translation files: ${langCog.fileName}`);
    const langFilePath = path.join(__dirname, `../application/files/i18n/${langCog.fileName}`);
    if (!fs.existsSync(langFilePath)) {
        console.log(`No found language files`);
        return null;
    }
    return JSON.parse(fs.readFileSync(langFilePath).toString('utf8')) || null;
}
exports.getLangData = getLangData;
//# sourceMappingURL=lang.config.js.map