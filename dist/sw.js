/**
 * Alexandria University Student Union - Service Worker (PWA Engine)
 * Offline UI Caching & Installability
 */

const CACHE_NAME = 'asa-cache-v2.1';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/assets.js',
  '/favicon.png',
  '/manifest.webmanifest',
  '/assets/student-union.png',
  '/assets/alexandria-university.png',
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('PWA Precache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1. Never cache Supabase REST API requests - always network!
  if (url.origin.includes('supabase.co')) {
    event.respondWith(fetch(req));
    return;
  }

  // 2. Core App Assets: Stale-while-revalidate or Network-first
  event.respondWith(
    fetch(req).then((networkRes) => {
      if (networkRes && networkRes.status === 200 && req.method === 'GET') {
        const copy = networkRes.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
      }
      return networkRes;
    }).catch(() => {
      return caches.match(req).then((cachedRes) => {
        if (cachedRes) return cachedRes;
        if (req.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
