<script>
	import Logo from '$lib/Logo.svelte';
	export let data;
	const { info, legal, header } = data;
</script>

<header class="t0 l0 r0 p251251 z5 info">
	{@html header.content.rendered}
	<Logo />
</header>
<main class="p page">
	{@html info.content.rendered}
	<details>
		<summary class="sm pointer">{legal.title.rendered}</summary>
		{@html legal.content.rendered}
	</details>
</main>
