<script>
	import Logo from '$lib/Logo.svelte';
	export let data;
	const { info, legal } = data;
</script>

<Logo />
<!-- <div class="fixed t0 r0 z5">
	<a class="p05" href="./#index" style="font-size: 2em;" data-sveltekit-prefetch>×</a>
</div> -->
<main class="p page">
	{@html info.content.rendered}
	<details>
		<summary class="sm pointer">{legal.title.rendered}</summary>
		{@html legal.content.rendered}
	</details>
</main>
