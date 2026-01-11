#!/usr/bin/env node

/**
 * IndexNow 自动通知脚本
 *
 * 检测 Git 仓库中变化的 HTML 文件，并自动通知搜索引擎
 *
 * 用法：
 *   node scripts/notify-indexnow.js              # 通知变化的文件
 *   node scripts/notify-indexnow.js --all        # 通知所有页面
 *   node scripts/notify-indexnow.js --url <url>  # 通知指定 URL
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://stealbrainrot.co';

/**
 * 从 sitemap.xml 提取所有 URL
 */
function getUrlsFromSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️  sitemap.xml 不存在，只返回主页');
    return [`${BASE_URL}/`];
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];

  return urlMatches.map(match => {
    const url = match.replace(/<\/?loc>/g, '');
    return url;
  });
}

/**
 * 获取 Git 变化的 HTML 文件
 */
function getChangedHtmlFiles() {
  try {
    // 获取相对于上次提交变化的文件
    const output = execSync('git diff --name-only HEAD~1 HEAD', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore']
    });

    const allChanges = output.trim().split('\n').filter(f => f.trim());

    // 只保留 HTML 文件，排除 node_modules
    return allChanges.filter(file => {
      return file.endsWith('.html') && !file.includes('node_modules');
    });

  } catch (error) {
    // 可能是第一次提交或不在 Git 仓库中
    return [];
  }
}

/**
 * 将文件路径转换为 URL
 */
function fileToUrl(filePath) {
  // 移除可能的前缀路径，保留相对于网站根目录的路径
  let urlPath = filePath
    .replace(/^.*stealbrainrot\.co\\?/, '')
    .replace(/^.*stealbrainrot\.co\/?/, '')
    .replace(/\\/g, '/');

  // 移除开头的斜杠
  urlPath = urlPath.replace(/^\//, '');

  if (!urlPath) {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}/${urlPath}`;
}

/**
 * 执行 IndexNow 通知
 */
async function notifyIndexNow(urls) {
  console.log(`🔔 通知 IndexNow: ${urls.length} 个 URL\n`);

  for (const url of urls) {
    console.log(`  - ${url}`);
  }
  console.log('');

  // 导入并运行 indexnow.js
  const indexNowScript = path.join(__dirname, 'indexnow.js');

  // 修改 process.argv 来传递 URL
  const originalArgs = process.argv.slice();
  process.argv = ['node', indexNowScript, ...urls];

  try {
    // 动态执行 indexnow.js
    require(indexNowScript);
  } catch (error) {
    console.error('❌ 通知失败:', error.message);
    process.exit(1);
  } finally {
    // 恢复原始 argv
    process.argv = originalArgs;
  }
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  let urls = [];

  // 解析命令行参数
  if (args.includes('--all')) {
    console.log('📋 模式: 通知所有页面（从 sitemap.xml）\n');
    urls = getUrlsFromSitemap();

  } else if (args.includes('--url')) {
    const urlIndex = args.indexOf('--url');
    if (urlIndex === -1 || urlIndex + 1 >= args.length) {
      console.error('❌ --url 需要指定一个 URL');
      console.error('\n用法: node scripts/notify-indexnow.js --url <url>');
      process.exit(1);
    }
    urls = [args[urlIndex + 1]];

  } else {
    // 默认：检测变化的文件
    console.log('🔍 检测变化的 HTML 文件...\n');
    const changedFiles = getChangedHtmlFiles();

    if (changedFiles.length === 0) {
      console.log('✅ 没有检测到 HTML 文件变化');
      console.log('\n提示:');
      console.log('  使用 --all 通知所有页面');
      console.log('  使用 --url <url> 通知指定页面');
      process.exit(0);
    }

    console.log('变化的文件:');
    for (const file of changedFiles) {
      console.log(`  - ${file}`);
    }
    console.log('');

    // 转换为 URL
    urls = changedFiles.map(fileToUrl);

    // 始终包含主页（如果文件列表中还没有）
    if (!urls.includes(`${BASE_URL}/`)) {
      urls.push(`${BASE_URL}/`);
    }
  }

  // 去重
  urls = [...new Set(urls)];

  // 通知
  await notifyIndexNow(urls);
}

main();
