<script>
	export let post;
	import { setMap } from '$lib/useMapMini';
</script>

<div
	class="map z2"
	use:setMap={{
		post: post,
		zoom: 16
	}}
/>

<style>
	@import 'leaflet/dist/leaflet.css';

	.map {
		height: 300px;
	}
</style>
