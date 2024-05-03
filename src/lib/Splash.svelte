<script>
  let { posts, children, onclose } = $props();
  // import { onMount } from "svelte";
  // import { fade } from 'svelte/transition';
  import Logo from "$lib/Logo.svelte";

  // onMount(() => {
  // 	randomPost = posts[Math.floor(Math.random() * 20)];
  // });
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  // const close = () => {
  //     dispatch("close");
  // };
  const random = $derived(Math.floor(Math.random() * 20));
</script>

<header
  role="button"
  tabindex="0"
  class="t0 l0 r0 b0 jc-center ai-center bg-green pointer z5 fixed flex"
  onclick={onclose}
  onkeydown={onclose}
>
  {#if posts[random] && posts[random].acf.image0}
    <img
      class="splash"
      src={posts[random].acf.image0.sizes.large}
      srcset="{posts[random].acf.image0.sizes.medium} 400w, {posts[random].acf
        .image0.sizes.medium} 800w, {posts[random].acf.image0.sizes
        .large} 1600w"
      width="800"
      height="600"
      alt=""
    />
  {/if}
  <div class="t0 l0 r0 p z5 absolute">
    {@render children()}
  </div>
  <!-- <Logo /> -->
</header>
