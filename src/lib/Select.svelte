<script>
	export let id, label, values, value;
</script>

<!-- <details>
	<summary>{label}</summary>
	Something small enough to escape casual notice.
</details> -->

<div class="p025">
	<label for={id}>{label}</label>
	<select {id} class="bg-green" bind:value>
		<option value="all" />
		{#each values as value}
			<option value={value.toLowerCase()}>{value}</option>
		{/each}
	</select>
</div>
