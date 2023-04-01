<script>
	export let posts;
	let randomPost = '';
	import { onMount } from 'svelte';
	// import { fade } from 'svelte/transition';
	import Logo from '$lib/Logo.svelte';

	onMount(() => {
		randomPost = posts[Math.floor(Math.random() * 20)];
	});
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	const close = () => {
		dispatch('close');
	};
</script>

<header
	class="fixed t0 l0 r0 b0 flex jc-center ai-center bg-green pointer z5"
	on:click={close}
	on:keydown={close}
>
	{#if randomPost && randomPost.acf.image0}
		<img
			class="splash"
			src={randomPost.acf.image0.sizes.large}
			srcset="{randomPost.acf.image0.sizes.medium} 400w, {randomPost.acf.image0.sizes
				.medium} 800w, {randomPost.acf.image0.sizes.large} 1600w"
			width="800"
			height="600"
			alt=""
		/>
	{/if}
	<div class="absolute t0 l0 r0 p z5">
		<slot />
	</div>
	<Logo />
</header>
