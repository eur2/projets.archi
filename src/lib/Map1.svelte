<script>
	import { setMap } from '$lib/useMap1';
	export let filteredPosts;
</script>

<div
	id="map"
	use:setMap={{
		posts: filteredPosts,
		latitude: 43.6506786,
		longitude: 1.4408547,
		zoom: 10
	}}
/>

<style>
	@import 'leaflet/dist/leaflet.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.css';
	@import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
	#map {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
	}
</style>
