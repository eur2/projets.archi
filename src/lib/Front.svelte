<script>
	export let posts;
	let randomPost = '';
	import { onMount } from 'svelte';
	onMount(() => {
		randomPost = posts[Math.floor(Math.random() * 20)];
	});
</script>

<div id="front">
	<a href="#index">
		<div class="absolute t0 l0 r0 b0 flex jc-center ai-center bg-green">
			{#if randomPost && randomPost.acf.image0}
				<img
					class="front"
					src={randomPost.acf.image0.sizes.large}
					srcset="{randomPost.acf.image0.sizes.medium} 400w, {randomPost.acf.image0.sizes
						.medium} 800w, {randomPost.acf.image0.sizes.large} 1600w"
					width="800"
					height="600"
					alt=""
				/>
			{/if}
		</div>
	</a>
</div>
