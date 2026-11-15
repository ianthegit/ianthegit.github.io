const CACHE_NAME = 'trail-tide-v1';
const ASSETS = ['./', './index.html', './manifest.json', './surfers.svg', './control.csv', './spots.csv', './activity.csv','./EdaleCircularWalk.gpx', './NCN_10_Reivers_Route.gpx','./Hadrian_s_Cycleway.gpx', './WhitehavenTynemouth.gpx', 'Gravel-bike-C2C-full-2026-revised.gpx'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});