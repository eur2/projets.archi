<script>
	export let id, label, values, value;
</script>

<!-- <details>
	<summary>{label}</summary>
	Something small enough to escape casual notice.
</details> -->

<div class="p025 flex column">
	<label for={id}>{label}</label>
	<select {id} class="bg-green" bind:value on:change={() => scrollTo(0, 0)}>
		<option value="all" />
		{#each values as value}
			<option value={value.toLowerCase()}>{value}</option>
		{/each}
	</select>
</div>
