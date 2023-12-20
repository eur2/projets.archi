export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-256x256.png","android-chrome-512x512.png","apple-touch-icon.png","favicon.png","manifest.json","marker.svg","robots.txt","subset-SelfModern-Italic.woff","subset-SelfModern-Italic.woff2","subset-SelfModern-Regular.woff","subset-SelfModern-Regular.woff2","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.GpEpy5s6.js","app":"_app/immutable/entry/app.6JmwwLIt.js","imports":["_app/immutable/entry/start.GpEpy5s6.js","_app/immutable/chunks/scheduler.Sga31Z68.js","_app/immutable/chunks/singletons.tx2v6ZCy.js","_app/immutable/chunks/index.syzS8QXI.js","_app/immutable/entry/app.6JmwwLIt.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.Sga31Z68.js","_app/immutable/chunks/index.5_Pvhs1g.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
