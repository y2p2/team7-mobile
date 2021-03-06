/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.e46b06f5f301b83eb3d2cf6735d248b5.js"
);

workbox.core.setCacheNameDetails({prefix: "front-project"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.jpg$/, new workbox.strategies.CacheFirst({ "cacheName":"jpg-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 5, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/\.png$/, new workbox.strategies.CacheFirst({ "cacheName":"png-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 5, maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
