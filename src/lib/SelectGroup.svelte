<script>
  // export let value,
  // 	bet_general,
  // 	bet_structure,
  // 	bet_thermique,
  // 	bet_environnement,
  // 	bet_fluide,
  // 	acousticiens,
  // 	economistes;
  let {
    value = $bindable(),
    bet_general,
    bet_structure,
    bet_thermique,
    bet_environnement,
    bet_fluide,
    acousticiens,
    economistes,
  } = $props();
</script>

<!-- <details>
	<summary>{label}</summary>
	Something small enough to escape casual notice.
</details> -->

<!-- <div class="p025">
	<label for={id}>{label}</label>
	<select {id} class="bg-green" bind:value>
		<option value="all" />
		{#each values as value}
			<option value={value.toLowerCase()}>{value}</option>
		{/each}
	</select>
</div> -->

<div class="p025 column flex">
  <label for="bureaux">Bureaux d'études</label>
  <select
    name="bureaux"
    id="bureaux"
    class="bg-green"
    bind:value
    onchange={() => scrollTo(0, 0)}
  >
    <option value="all"></option>
    <optgroup label="BET Général">
      {#each bet_general as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="BET Structure">
      {#each bet_structure as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="BET Thermique">
      {#each bet_thermique as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="BET Fluides">
      {#each bet_fluide as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="BET Environnement">
      {#each bet_environnement as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="Economiste">
      {#each economistes as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
    <optgroup label="Acousticien">
      {#each acousticiens as value}
        <option value={value.toLowerCase()}>{value}</option>
      {/each}
    </optgroup>
  </select>
</div>
