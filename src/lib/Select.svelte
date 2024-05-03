<script>
  // export let id, label, values, value;
  let { id, label, values, value = $bindable() } = $props();
</script>

<!-- <details>
	<summary>{label}</summary>
	Something small enough to escape casual notice.
</details> -->

<div class="p025 column flex">
  <label for={id}>{label}</label>
  <select {id} class="bg-green" bind:value onchange={() => scrollTo(0, 0)}>
    <option value="all"></option>
    {#each values as value}
      <option value={value.toLowerCase()}>{value}</option>
    {/each}
  </select>
</div>
