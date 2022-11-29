<script>
	export let data;
	const { posts } = data;
	import MapLeaflet from '$lib/MapLeaflet.svelte';
	// import Select from '$lib/Select.svelte';
	// import SelectGroup from '$lib/SelectGroup.svelte';

	$: filteredPosts = posts;
</script>

<main>
	<!-- <Map {filteredPosts} /> -->
	<!-- <div id="map" /> -->

	<!-- <div id="map" bind:this={filteredPosts} /> -->
	<MapLeaflet {filteredPosts} />
</main>
