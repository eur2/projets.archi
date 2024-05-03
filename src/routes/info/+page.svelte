<script>
  // import Logo from '$lib/Logo.svelte';
  // export let data;
  let { data } = $props();
  let { info, legal, header, footer } = data;
</script>

<!-- <Logo /> -->
<div class="absolute t0 l0 p05 z5">
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

<nav class="fixed b0 l0 r0 z4 flex jc-center">
  <a
    href="."
    class="p05 m025 bg-black border-radius"
    data-sveltekit-preload-data="hover"
    aria-label="Index"
    ><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      ><line x1="18" y1="6" x2="6" y2="18"></line><line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
      ></line></svg
    ></a
  >

  <!-- <a href="." class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover">Index</a>
	<a href="/carte" class="p05 m025 bg-black border-radius" data-sveltekit-preload-data="hover"
		>Carte</a
	> -->
</nav>
<!-- <a class="fixed t0 r0 z5 p025" href="."
	><svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
		><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg
	></a
> -->
<main class="p page bg-green">
  <header>
    {@html header.content.rendered}
  </header>
  <section>
    {@html info.content.rendered}
    <details>
      <summary class="sm pointer">{legal.title.rendered}</summary>
      {@html legal.content.rendered}
    </details>
  </section>
</main>
<footer class="center p sm mb bg-fbfbfb">
  {@html footer.content.rendered}<br />
</footer>
