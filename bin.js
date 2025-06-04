#!/usr/bin/env node
// @ts-check

const path = require('path');

// 设置 Playwright 浏览器二进制文件的路径
// 确保 Playwright 在运行时使用通过 postinstall脚本下载到 ./pw-browsers 的浏览器
// __dirname 在 npx 执行环境通常指向包的根目录
process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(__dirname, 'pw-browsers');

require('./mcp-server');
