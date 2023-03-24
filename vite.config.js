import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()]
	// optimizeDeps: {
	// 	exclude: ['leaflet', 'leaflet.markercluster']
	// }
};

export default config;
