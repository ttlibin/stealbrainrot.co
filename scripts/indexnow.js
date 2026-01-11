#!/usr/bin/env node

/**
 * IndexNow CLI Tool
 *
 * Command-line utility to notify search engines about URL changes.
 *
 * Usage:
 *   node scripts/indexnow.js https://stealbrainrot.co/page1
 *   node scripts/indexnow.js https://stealbrainrot.co/page1 https://stealbrainrot.co/page2
 *
 * Environment variables:
 *   INDEXNOW_API_URL - Custom IndexNow API endpoint (optional)
 *   INDEXNOW_KEY     - Your IndexNow key (default: ca9a891f04ce241bbd0bc01843ee0b9a)
 */

const https = require('https');

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'ca9a891f04ce241bbd0bc01843ee0b9a';
const INDEXNOW_HOST = 'stealbrainrot.co';
const INDEXNOW_ENDPOINTS = [
  'www.bing.com',
  'indexnow.google.com',
  'yandex.com'
];

/**
 * Parse command line arguments as URLs
 */
function getUrlsFromArgs() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node scripts/indexnow.js <url1> [url2] [url3] ...');
    console.error('');
    console.error('Example:');
    console.error('  node scripts/indexnow.js https://stealbrainrot.co/page1.html');
    console.error('  node scripts/indexnow.js https://stealbrainrot.co/new-page https://stealbrainrot.co/updated-page');
    process.exit(1);
  }

  // Validate URLs
  for (const url of args) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== INDEXNOW_HOST && !parsed.hostname.endsWith('.' + INDEXNOW_HOST)) {
        console.error(`Error: URL hostname must be ${INDEXNOW_HOST} or its subdomain`);
        console.error(`Got: ${parsed.hostname}`);
        process.exit(1);
      }
    } catch (e) {
      console.error(`Error: Invalid URL "${url}"`);
      process.exit(1);
    }
  }

  return args;
}

/**
 * Send IndexNow request to a search engine
 */
function sendIndexNow(endpoint, urls) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    });

    const options = {
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'stealbrainrot.co-indexnow-cli/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          endpoint,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: data,
          ok: res.statusCode >= 200 && res.statusCode < 300
        });
      });
    });

    req.on('error', (error) => {
      resolve({
        endpoint,
        error: error.message,
        ok: false
      });
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Main function
 */
async function main() {
  const urls = getUrlsFromArgs();

  console.log(`🔔 Notifying IndexNow about ${urls.length} URL(s)...\n`);

  for (const url of urls) {
    console.log(`  - ${url}`);
  }
  console.log('');

  // Send to all endpoints
  const results = await Promise.all(
    INDEXNOW_ENDPOINTS.map(endpoint => sendIndexNow(endpoint, urls))
  );

  // Display results
  console.log('Results:\n');

  for (const result of results) {
    const status = result.ok ? '✅' : '❌';
    const statusText = result.ok
      ? `Success (${result.statusCode})`
      : result.error
      ? `Error: ${result.error}`
      : `Failed (${result.statusCode})`;

    console.log(`${status} ${result.endpoint}`);
    console.log(`   ${statusText}`);
    console.log('');
  }

  const successful = results.filter(r => r.ok).length;
  const total = results.length;

  if (successful === total) {
    console.log(`✨ Successfully notified all ${total} search engines!`);
    process.exit(0);
  } else if (successful > 0) {
    console.log(`⚠️  Notified ${successful}/${total} search engines`);
    process.exit(0);
  } else {
    console.log(`❌ Failed to notify any search engines`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
