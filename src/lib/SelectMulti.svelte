<script>
	export let id, label, values, value;
</script>

<!-- <details>
	<summary>{label}</summary>
	Something small enough to escape casual notice.
</details> -->

<div class="p025">
	<label for={id}>{label}</label>
	<select {name} {id} class="bg-green" multiple bind:value>
		{#each values as value}
			<option {value}>{value}</option>
		{/each}
	</select>
</div>
