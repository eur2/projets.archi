<script>
	export let posts;
	let visible = true;
	function handleToggle() {
		visible = !visible;
	}
	let randomPost = '';
	// $: randomPost = posts[Math.floor(Math.random() * 10)];
	import { onMount } from 'svelte';
	onMount(() => {
		randomPost = posts[Math.floor(Math.random() * 9)];
	});
</script>

<div id="front" class="pointer" on:click={handleToggle} on:keydown={handleToggle}>
	{#if visible}
		<div class="fixed z5 t0 l0 r0 b0 flex jc-center ai-center">
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
		<div class="fixed t0 l0 p05 z5">
			<a href="https://maop.fr/" target="_blank" rel="noreferrer">
				<svg
					data-name="Logo MAOP"
					xmlns="http://www.w3.org/2000/svg"
					width="70.56mm"
					height="70.6mm"
					viewBox="0 0 200 200.12"
				>
					<title>logo-maop</title>
					<path d="M106.51,5.93a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M63.56,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M149.22,31.38a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M174.29,57.47a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M200,99.79a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M173.68,142.29a6,6,0,0,1-12,0v0a6,6,0,0,1,12,0Z" />
					<path d="M149.21,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M105.52,194.21a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M63.17,167.61a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path d="M39,142.3a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
					<path
						d="M12,99.93a6,6,0,0,1-6,5.91,6,6,0,0,1-6-5.92H0A6,6,0,0,1,6,94a6,6,0,0,1,6,5.92h0"
					/>
					<path d="M38.67,57.54a6,6,0,0,1-12,0h0a6,6,0,0,1,12,0Z" />
				</svg>
			</a>
		</div>
	{/if}
</div>
