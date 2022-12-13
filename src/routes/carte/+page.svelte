<script>
	export let data;
	const { posts } = data;
	import Map from '$lib/Map.svelte';
	// import Select from '$lib/Select.svelte';
	// import SelectGroup from '$lib/SelectGroup.svelte';
	$: filteredPosts = posts;
</script>

<main id="index">
	<!-- <Map {filteredPosts} /> -->
	<!-- <div id="map" /> -->

	<!-- <div id="map" bind:this={filteredPosts} /> -->
	<Map {filteredPosts} />
	<aside>
		{#each filteredPosts as post}
			<div class="target bg-green" id={post.id}>
				<a href="#index" class="fixed t0 l0 r0 center bg-green">×</a>
				{#if post.acf.image1}
					<img
						class="w100"
						src={post.acf.image1.sizes.large}
						srcset="{post.acf.image1.sizes.medium} 400w, {post.acf.image1.sizes.large} 800w, {post
							.acf.image1.sizes['2048x2048']} 1600w"
						width="800"
						height="600"
						alt="alt"
					/>
				{/if}
				{#if post.acf.image2}
					<img
						class="w100"
						src={post.acf.image2.sizes.medium}
						srcset="{post.acf.image2.sizes.medium} 400w, {post.acf.image2.sizes.large} 800w, {post
							.acf.image2.sizes['2048x2048']} 1600w"
						width="800"
						height="600"
						alt="alt"
					/>
				{/if}
				{#if post.acf.image3}
					<img
						class="w100"
						src={post.acf.image3.sizes.medium}
						srcset="{post.acf.image3.sizes.medium} 400w, {post.acf.image3.sizes.large} 800w, {post
							.acf.image3.sizes['2048x2048']} 1600w"
						width="800"
						height="600"
						alt="alt"
					/>
				{/if}
			</div>
		{/each}
	</aside>
</main>
