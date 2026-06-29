const CACHE_NAME = 'six-lines-v1';
const ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './js/app.js',
  './js/casting.js',
  './js/calendar.js',
  './js/chartEngine.js',
  './js/storage.js',
  './js/ai.js',
  './js/uiChartViews.js',
  './manifest.json'
];

// A service worker that performs no caching at all.
// It only ensures immediate activation on update.

self.addEventListener('install', event => {
  // Activate immediately on install
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim());
});

// Do not cache anything - always fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
