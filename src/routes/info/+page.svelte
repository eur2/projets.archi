<script>
	import Logo from '$lib/Logo.svelte';
	export let data;
	const { info, legal, header, footer } = data;
	let visible;
	function handleToggle() {
		visible = !visible;
	}
</script>

<!-- <header class="t0 l0 r0 p251251 z5 info">
	<br />
	{@html header.content.rendered}
</header> -->
<Logo />
<nav class="fixed b0 t0 r0 z4 sm bg-green p025 overflow-y">
	<div class="flex jc-center p025555">
		<button on:click={handleToggle} class={!visible ? '' : 'h-100vh flex'}
			>{!visible ? '×' : 'Menu'}</button
		>
	</div>
	<div class={!visible ? '' : 'none'} style="width: 150px;">
		<div>
			<div class="p025">
				<a href="/" data-sveltekit-preload-data="hover">☀ Index</a>
			</div>
			<div class="p025">
				<a href="/carte" data-sveltekit-preload-data="hover">☁ Carte</a>
			</div>
			<div class="p025">
				<a href="/info" data-sveltekit-preload-data="hover">☂ Info</a>
			</div>
		</div>
	</div>
</nav>
<main class="p page bg-grey {!visible ? 'mr-150' : 'mr-50'}">
	<header>
		{@html header.content.rendered}
	</header>
	{@html info.content.rendered}
	<details>
		<summary class="sm pointer">{legal.title.rendered}</summary>
		{@html legal.content.rendered}
	</details>
</main>
<footer class="center eeeee bg-fbfbfb p sm {!visible ? 'mr-150' : 'mr-50'}">
	{@html footer.content.rendered}
</footer>
