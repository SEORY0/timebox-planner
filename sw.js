const CACHE_NAME = 'timebox-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon.png'
];

// 설치 시 캐시 저장
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// 요청 시 캐시에서 로드 (오프라인 지원)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});