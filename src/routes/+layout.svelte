<script>
	import './styles.css';
	export let data;
	const { footer } = data;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Projets: plateforme de publication des concours et consultations d’architecture</title>
</svelte:head>
<nav class="fixed b0 l0 r0 z5 flex jc-center">
	<a
		href="/"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/'}
		aria-current={$page.url.pathname === '/' ? 'true' : 'false'}
		data-sveltekit-preload-data="hover">Index</a
	>
	<a
		href="/carte"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/carte'}
		aria-current={$page.url.pathname === '/carte' ? 'true' : 'false'}
		data-sveltekit-preload-data="hover">Carte</a
	>
	<a
		href="/info"
		class="p05 m025 bg-green border-radius"
		class:current={$page.url.pathname === '/info'}
		aria-current={$page.url.pathname === '/info' ? 'true' : 'false'}
		data-sveltekit-preload-data="hover">Info</a
	>
</nav>
{#if $page.url.pathname === '/carte'}
	<slot />
{:else}
	<slot />
	<footer class="relativeee center bg-grey p">
		<!-- <Logo /> -->
		<div style="max-width: 100px;">
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

		{@html footer.content.rendered}
		<br />
	</footer>
{/if}
