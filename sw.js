self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 크롬이 어플로 인식하게 만드는 필수 이벤트
});
