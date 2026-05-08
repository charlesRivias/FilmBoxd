const CACHE_NAME = 'filmboxd-v1';
const urlsToCache = [
  'index.html',
  'films.html',
  'movie.html',
  'manifest.json'
];

// Install event – cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event – serve from cache first, then network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});