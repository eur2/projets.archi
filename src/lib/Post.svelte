<script>
  let { post } = $props();
  import MapMini from "$lib/MapMini.svelte";
  let visible = $state();
  let hovering = $state();

  function handleToggle() {
    visible = !visible;
  }
  function enter() {
    hovering = true;
  }
  function leave() {
    hovering = false;
  }
</script>

<article id={post.id} class="border-top">
  <header
    role="button"
    tabindex="0"
    onclick={handleToggle}
    onkeydown={handleToggle}
    onmouseenter={enter}
    onmouseleave={leave}
    class={visible ? "eeee z4 pointer" : "pointer bg-white"}
  >
    <div class="flex1 p-r">{post.acf.annee}</div>
    <div class="flex2 p-r">
      {#if post.acf.localisation}
        {post.acf.localisation}{:else}{post.acf.localisation1}{/if}
    </div>
    <div class="flex5 p-r">
      <div>{post.acf.projet.name}</div>
      <div class="inlineflex">
        <!-- {#if laureat === true}<div class="sm tag">laureat</div>{:else}{/if} -->
        <!-- <div class="sm tag" class:selected={isTypeSelect === true}>
					{post.acf.type}
				</div>
				<div class="sm tag" class:selected={isStructureSelect === true}>
					{post.acf.structure}
				</div>
				<div class="sm tag" class:selected={isSurfaceSelect === true}>
					{post.acf.surface}
				</div>
				<div class="sm tag" class:selected={isBudgetSelect === true}>
					{post.acf.budget}
				</div> -->
        {#if post.acf.type_construction}
          <div class="sm tag" class:bg-fbfbfb={visible === true}>
            {post.acf.type_construction[0]}<br
            />{#if post.acf.type_construction[1]}
              {post.acf.type_construction[1]}<br
              />{/if}{#if post.acf.type_construction[2]}
              {post.acf.type_construction[2]}<br />{/if}
          </div>{/if}
        <div class="sm tag" class:bg-fbfbfb={visible === true}>
          {post.acf.types[0]}<br />{#if post.acf.types[1]}
            {post.acf.types[1]}<br />{/if}{#if post.acf.types[2]}
            {post.acf.types[2]}<br />{/if}
        </div>
        <div class="sm tag" class:bg-fbfbfb={visible === true}>
          {post.acf.structure}
        </div>
        <div class="sm tag" class:bg-fbfbfb={visible === true}>
          {post.acf.surface}
        </div>
        <div class="sm tag" class:bg-fbfbfb={visible === true}>
          {post.acf.budget}
        </div>
      </div>
    </div>
    <div class="flex2 p-r">
      <div>{post.acf.maitre}</div>
    </div>
    <div class="flex2 p-r">
      <div>{post.acf.architecte}<br />{post.acf.architecte_associé}</div>
      <div class="inlineflex">
        {#if post.acf.laureat === true}<div
            class="sm tag"
            class:bg-fbfbfb={visible === true}
          >
            Lauréat
          </div>{:else}{""}{/if}
      </div>
    </div>
    <div>
      <svg
        class="w20"
        class:rotate={visible === true}
        stroke="currentColor"
        fill="none"
        stroke-width="1"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        ><polyline points="6 9 12 15 18 9" /></svg
      >
    </div>
  </header>
  {#if hovering}
    <div class="z3 thumb absolute" class:none={visible === true}>
      {#if post.acf.image0}
        <img src={post.acf.image0.sizes.medium} width="300" alt="alt" />
      {/if}
    </div>
  {/if}
  {#if visible}
    <div class="bg-fbfbfb flex">
      <section class="p flex1 facts-container">
        <div>
          <div class="sm">Architecte</div>
          <div class="mb">
            {post.acf.architecte}<br />{post.acf.architecte_associé}
          </div>
        </div>
        {#if post.acf.bet_general}
          <div>
            <div class="sm">BET Général</div>
            <div class="mb">{post.acf.bet_general}</div>
          </div>
        {/if}
        {#if post.acf.bet_structure}
          <div>
            <div class="sm">BET Structure</div>
            <div class="mb">{post.acf.bet_structure}</div>
          </div>
        {/if}
        {#if post.acf.bet_thermique}
          <div>
            <div class="sm">BET Thermique</div>
            <div class="mb">{post.acf.bet_thermique}</div>
          </div>
        {/if}
        {#if post.acf.bet_fluides}
          <div>
            <div class="sm">BET Fluides</div>
            <div class="mb">{post.acf.bet_fluides}</div>
          </div>
        {/if}
        {#if post.acf.bet_environnement}
          <div>
            <div class="sm">BET Environnement</div>
            <div class="mb">{post.acf.bet_environnement}</div>
          </div>
        {/if}
        {#if post.acf.economiste}
          <div>
            <div class="sm">Economiste</div>
            <div class="mb">{post.acf.economiste}</div>
          </div>
        {/if}
        {#if post.acf.paysagiste}
          <div>
            <div class="sm">Paysagiste</div>
            <div class="mb">{post.acf.paysagiste}</div>
          </div>
        {/if}
        {#if post.acf.eclairagiste}
          <div>
            <div class="sm">Eclairagiste</div>
            <div class="mb">{post.acf.eclairagiste}</div>
          </div>
        {/if}
        {#if post.acf.acousticien}
          <div>
            <div class="sm">Acousticien</div>
            <div class="mb">{post.acf.acousticien}</div>
          </div>
        {/if}
        {#if post.acf.architecte_dinterieur}
          <div>
            <div class="sm">Architecte d'intérieur</div>
            <div class="mb">{post.acf.architecte_dinterieur}</div>
          </div>
        {/if}
        {#if post.acf.autres}
          <div>
            <div class="sm">Autre(s) intervenant(s)</div>
            <div class="mb">{post.acf.autres}</div>
          </div>
        {/if}
        <div>
          <div class="sm">Maître d'ouvrage</div>
          <div class="mb">{post.acf.maitre}</div>
        </div>
        {#if post.acf.amenageur}
          <div>
            <div class="sm">Aménageur</div>
            <div class="mb">{post.acf.amenageur}</div>
          </div>
        {/if}
        <!-- <div>
					<div class="sm">Type</div>
					<div class="mb">{post.acf.types.join(', ')}</div>
				</div> -->
        <div>
          <div class="sm">Type</div>
          <div class="mb">
            {post.acf.types[0]}<br />{#if post.acf.types[1]}
              {post.acf.types[1]}<br />{/if}{#if post.acf.types[2]}
              {post.acf.types[2]}<br />{/if}
          </div>
        </div>
        <!-- {#if post.acf.type_construction}
					<div>
						<div class="sm">Type de construction</div>
						<div class="mb">{post.acf.type_construction}</div>
					</div>
				{/if} -->
        {#if post.acf.type_construction}
          <div>
            <div class="sm">Type de construction</div>
            <div class="mb">
              {post.acf.type_construction[0]}<br
              />{#if post.acf.type_construction[1]}
                {post.acf.type_construction[1]}<br
                />{/if}{#if post.acf.type_construction[2]}
                {post.acf.type_construction[2]}<br />{/if}
            </div>
          </div>
        {/if}
        <div>
          <div class="sm">Localisation</div>
          <div class="mb">
            {#if post.acf.localisation}
              {post.acf.localisation}{:else}{post.acf.localisation1}{/if}
          </div>
        </div>
        <div>
          <div class="sm">Année</div>
          <div class="mb">{post.acf.annee}</div>
        </div>
        <div>
          <div class="sm">Budget</div>
          <div class="mb">{post.acf.budget}</div>
        </div>
        <div>
          <div class="sm">Surface</div>
          <div class="mb">{post.acf.surface}</div>
        </div>
        <div>
          <div class="sm">Structure</div>
          <div class="mb">{post.acf.structure}</div>
        </div>
        {#if post.acf.plus}
          <div>
            <div class="sm">Plus</div>
            <div class="mb">{post.acf.plus}</div>
          </div>
        {/if}
      </section>
      <section class="p flex2">
        <div>
          <div class="sm">Description</div>
          <div class="mb">{@html post.acf.description}</div>
        </div>
        <MapMini {post} />
      </section>
      <section class="flex1 p">
        {#if post.acf.image1}
          <div class="sm">Planche 1</div>
          <a
            rel="noreferrer"
            target="_blank"
            href={post.acf.image1.sizes["2048x2048"]}
            ><img
              src={post.acf.image1.sizes.medium}
              srcset="{post.acf.image1.sizes.medium} 400w, {post.acf.image1
                .sizes.large} 800w, {post.acf.image1.sizes.large} 1600w"
              width="800"
              height="600"
              alt="alt"
            /></a
          >
        {/if}
        {#if post.acf.image2}
          <div class="sm">Planche 2</div>
          <a
            rel="noreferrer"
            target="_blank"
            href={post.acf.image2.sizes["2048x2048"]}
            ><img
              src={post.acf.image2.sizes.medium}
              srcset="{post.acf.image2.sizes.medium} 400w, {post.acf.image2
                .sizes.large} 800w, {post.acf.image2.sizes['2048x2048']} 1600w"
              width="800"
              height="600"
              alt="alt"
            /></a
          >
        {/if}
        {#if post.acf.image3}
          <div class="sm">Planche 3</div>
          <a
            rel="noreferrer"
            target="_blank"
            href={post.acf.image3.sizes["2048x2048"]}
            ><img
              src={post.acf.image3.sizes.medium}
              srcset="{post.acf.image3.sizes.medium} 400w, {post.acf.image3
                .sizes.large} 800w, {post.acf.image3.sizes['2048x2048']} 1600w"
              width="800"
              height="600"
              alt="alt"
            /></a
          >
        {/if}
      </section>
    </div>
  {/if}
</article>
