const CACHE_NAME = 'steal-brainrot-pwa-v2.0.1';
const GAME_CACHE = 'game-shell-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/game-shell.html',
  '/favicon.svg',
  '/favicon.ico',
  '/manifest.json',
  '/steal-brainrot-online.avif',
  'https://cdn.tailwindcss.com',
  'https://www.googletagmanager.com/gtag/js?id=G-TJ0WVHX547'
];

const gameUrlsToCache = [
  'https://st.8games.net/7/8g/igra-ukradi-brejnrot-onlajn/',
  'https://www.gameflare.com/online-game/roblox-steal-a-brainrot/',
  'https://www.crazygames.com/game/steal-brainrot-online'
];

// Install Service Worker - PWA Enhanced
self.addEventListener('install', function(event) {
  event.waitUntil(
    Promise.all([
      // 缓存主要PWA文件
      caches.open(CACHE_NAME).then(function(cache) {
        console.log('PWA cache opened');
        return cache.addAll(urlsToCache);
      }),
      // 预取游戏资源（错误不影响主功能）
      caches.open(GAME_CACHE).then(function(cache) {
        console.log('Game cache opened');
        return Promise.allSettled(
          gameUrlsToCache.map(url => 
            cache.add(url).catch(e => console.log(`Game cache failed for ${url}:`, e))
          )
        );
      })
    ]).then(() => {
      console.log('PWA Shell Service Worker installed');
      self.skipWaiting(); // 强制激活新SW
    })
  );
});

// Fetch Event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate Service Worker - PWA Enhanced
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME && cacheName !== GAME_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('PWA Shell Service Worker activated');
      return self.clients.claim(); // 立即控制所有客户端
    })
  );
});

// Handle PWA Shell Messages
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'GAME_LAUNCH') {
    console.log('Game launched via PWA Shell');
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      Promise.all([
        caches.delete(CACHE_NAME),
        caches.delete(GAME_CACHE)
      ]).then(() => {
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});
