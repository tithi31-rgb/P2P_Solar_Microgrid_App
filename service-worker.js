/* =========================================
   SMART MICROGRID – SERVICE WORKER
   Offline Support & Performance Optimization
========================================= */

const CACHE_NAME = "smart-microgrid-cache-v1";
const OFFLINE_FILES = [
    "./",
    "index.html",
    "style.css",
    "script.js",
    "data.js",
    "manifest.json"
];

/* ================= INSTALL ================= */
self.addEventListener("install", event => {
    console.log("[ServiceWorker] Install");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("[ServiceWorker] Caching app shell");
            return cache.addAll(OFFLINE_FILES);
        })
    );
    self.skipWaiting();
});

/* ================= ACTIVATE ================= */
self.addEventListener("activate", event => {
    console.log("[ServiceWorker] Activate");
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log("[ServiceWorker] Removing old cache:", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

/* ================= FETCH ================= */
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Serve from cache if available
            if (cachedResponse) {
                return cachedResponse;
            }

            // Otherwise fetch from network
            return fetch(event.request).catch(() => {
                // Offline fallback (for navigation)
                if (event.request.mode === "navigate") {
                    return caches.match("index.html");
                }
            });
        })
    );
});

