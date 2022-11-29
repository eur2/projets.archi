<script>
	export let value,
		bet_general,
		bet_structure,
		bet_thermique,
		bet_environnement,
		bet_fluides,
		acousticien,
		economiste;
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

<div class="p025">
	<label for="bureaux">Bureaux d'études</label>
	<select name="bureaux" id="bureaux" class="bg-green" bind:value>
		<option value="all" />
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
			{#each bet_fluides as value}
				<option value={value.toLowerCase()}>{value}</option>
			{/each}
		</optgroup>
		<optgroup label="BET Environnement">
			{#each bet_environnement as value}
				<option value={value.toLowerCase()}>{value}</option>
			{/each}
		</optgroup>
		<optgroup label="Economiste">
			{#each economiste as value}
				<option value={value.toLowerCase()}>{value}</option>
			{/each}
		</optgroup>
		<optgroup label="Acousticien">
			{#each acousticien as value}
				<option value={value.toLowerCase()}>{value}</option>
			{/each}
		</optgroup>
	</select>
</div>
