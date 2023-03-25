const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/_app/immutable/entry/app.697ad0c2.js",
  e + "/_app/immutable/chunks/0.a7dbc2b6.js",
  e + "/_app/immutable/chunks/1.62251da7.js",
  e + "/_app/immutable/chunks/2.407b5c09.js",
  e + "/_app/immutable/chunks/3.6860b416.js",
  e + "/_app/immutable/chunks/4.e318fe93.js",
  e + "/_app/immutable/chunks/5.c2f4c5cf.js",
  e + "/_app/immutable/chunks/6.55f3d1d1.js",
  e + "/_app/immutable/chunks/Logo.95901607.js",
  e + "/_app/immutable/chunks/SelectGroup.4d3e4983.js",
  e + "/_app/immutable/chunks/_commonjsHelpers.725317a4.js",
  e + "/_app/immutable/chunks/index.68f185f5.js",
  e + "/_app/immutable/chunks/index.edbe74d4.js",
  e + "/_app/immutable/chunks/leaflet-src.73ced07e.js",
  e + "/_app/immutable/chunks/leaflet.markercluster-src.5b44c77a.js",
  e + "/_app/immutable/chunks/marker.c27503a3.js",
  e + "/_app/immutable/assets/marker.8f81ff3d.svg",
  e + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  e + "/_app/immutable/chunks/singletons.5f033691.js",
  e + "/_app/immutable/chunks/stores.aaaad8d9.js",
  e + "/_app/immutable/chunks/useMap.82931a54.js",
  e + "/_app/immutable/entry/start.2c95c72b.js",
  e + "/_app/immutable/entry/error.svelte.589765e6.js",
  e + "/_app/immutable/assets/_layout.42f72035.css",
  e + "/_app/immutable/entry/_layout.svelte.5e3e7b03.js",
  e + "/_app/immutable/assets/_page.62e38da6.css",
  e + "/_app/immutable/entry/_page.svelte.8b816d57.js",
  e + "/_app/immutable/assets/_page.91dfa243.css",
  e + "/_app/immutable/entry/carte-page.svelte.80d80b6f.js",
  e + "/_app/immutable/entry/carte1-page.svelte.04ac5d87.js",
  e + "/_app/immutable/entry/info-page.svelte.9e1cf4b0.js",
  e + "/_app/immutable/assets/_page.2cdc5029.css",
  e + "/_app/immutable/entry/map-page.svelte.25c40692.js"
], m = [
  e + "/android-chrome-192x192.png",
  e + "/android-chrome-256x256.png",
  e + "/android-chrome-512x512.png",
  e + "/apple-touch-icon.png",
  e + "/favicon.png",
  e + "/manifest.json",
  e + "/marker.svg",
  e + "/robots.txt",
  e + "/subset-SelfModern-Italic.woff",
  e + "/subset-SelfModern-Italic.woff2",
  e + "/subset-SelfModern-Regular.woff",
  e + "/subset-SelfModern-Regular.woff2"
], i = "1679773140376", n = `cache-${i}`, l = [
  ...u,
  // the app itself
  ...m
  // everything in `static`
];
self.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(n)).addAll(l);
  }
  a.waitUntil(s());
});
self.addEventListener("activate", (a) => {
  async function s() {
    for (const t of await caches.keys())
      t !== n && await caches.delete(t);
  }
  a.waitUntil(s());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function s() {
    const t = new URL(a.request.url), c = await caches.open(n);
    if (l.includes(t.pathname))
      return c.match(a.request);
    try {
      const p = await fetch(a.request);
      return p.status === 200 && c.put(a.request, p.clone()), p;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(s());
});
