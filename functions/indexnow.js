/**
 * IndexNow API Endpoint for Cloudflare Pages
 *
 * This function handles IndexNow notifications for search engines.
 * It forwards index requests to multiple IndexNow endpoints (Bing, Google, Yandex).
 *
 * Usage:
 * POST /functions/indexnow
 * {
 *   "urls": ["https://stealbrainrot.co/page1", "https://stealbrainrot.co/page2"]
 * }
 */

const INDEXNOW_KEY = 'ca9a891f04ce241bbd0bc01843ee0b9a';
const HOST = 'stealbrainrot.co';

// IndexNow endpoints for different search engines
const INDEXNOW_ENDPOINTS = [
  'https://www.bing.com/IndexNow',
  'https://indexnow.google.com/indexnow',
  'https://yandex.com/indexnow'
];

/**
 * Validates that URLs belong to the configured host
 */
function validateUrls(urls) {
  if (!Array.isArray(urls)) {
    throw new Error('urls must be an array');
  }

  if (urls.length === 0) {
    throw new Error('urls array cannot be empty');
  }

  if (urls.length > 10000) {
    throw new Error('cannot submit more than 10,000 URLs at once');
  }

  for (const url of urls) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== HOST && !parsed.hostname.endsWith('.' + HOST)) {
        throw new Error(`URL hostname mismatch: ${url}`);
      }
    } catch (e) {
      throw new Error(`Invalid URL: ${url}`);
    }
  }
}

/**
 * Sends IndexNow request to a specific endpoint
 */
async function sendIndexNow(endpoint, urls) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'stealbrainrot.co-indexnow/1.0'
    },
    body: JSON.stringify(payload)
  });

  return {
    endpoint,
    status: response.status,
    ok: response.ok
  };
}

export async function onRequest(context) {
  const { request } = context;

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({
      error: 'Method not allowed',
      message: 'Only POST requests are accepted'
    }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Parse request body
    const body = await request.json();
    const urls = body.urls || body.urlList;

    if (!urls) {
      return new Response(JSON.stringify({
        error: 'Missing urls parameter',
        message: 'Request must include "urls" or "urlList" array'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate URLs
    validateUrls(urls);

    // Send to all IndexNow endpoints in parallel
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(endpoint => sendIndexNow(endpoint, urls))
    );

    const successful = results.filter(r => r.status === 'fulfilled' && r.value.ok).length;
    const failed = results.length - successful;

    return new Response(JSON.stringify({
      success: true,
      message: `IndexNow notification sent to ${successful}/${results.length} search engines`,
      urls: urls,
      results: results.map((r, i) => ({
        endpoint: INDEXNOW_ENDPOINTS[i],
        status: r.status === 'fulfilled' ? r.value.status : 'failed',
        ok: r.status === 'fulfilled' ? r.value.ok : false
      })),
      summary: {
        total: results.length,
        successful,
        failed
      }
    }), {
      status: successful > 0 ? 200 : 207,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Invalid request',
      message: error.message
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
