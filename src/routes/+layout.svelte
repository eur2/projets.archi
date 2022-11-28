<script>
	import './styles.css';
	import Logo from '$lib/Logo.svelte';
	export let data;
	const { footer, header } = data;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Projets: plateforme de publication des concours et consultations d’architecture</title>
</svelte:head>
<nav class="fixed b0 l0 r0 z5 flex jc-center">
	<a
		href="/#index"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/'}
		aria-current={$page.url.pathname === '/' ? 'true' : 'false'}
		data-sveltekit-prefetch>Index</a
	>
	<a
		href="/carte"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/carte'}
		aria-current={$page.url.pathname === '/carte' ? 'true' : 'false'}
		data-sveltekit-prefetch>Carte</a
	>
	<a
		href="/info"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/info'}
		aria-current={$page.url.pathname === '/info' ? 'true' : 'false'}
		data-sveltekit-prefetch>Info</a
	>
</nav>
{#if $page.url.pathname === '/carte'}
	<slot />
{:else}
	<header
		class="t0 l0 r0 p251251 z5"
		class:absolute={$page.url.pathname === '/'}
		class:info={$page.url.pathname === '/info'}
	>
		{@html header.content.rendered}
		<Logo />
	</header>
	<slot />
	<footer class="relative center bg-grey p">
		{@html footer.content.rendered}
		<br />
	</footer>
{/if}
