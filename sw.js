// Service worker mínimo: solo lo necesario para que el navegador
// considere la app "instalable". No cachea nada todavía.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
