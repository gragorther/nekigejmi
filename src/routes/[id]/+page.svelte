<script lang="ts">
	import Form from '$lib/Form.svelte';
	import DivGrid from '$lib/DivGrid.svelte';
	import Box from '$lib/Box.svelte';
	import Title from '$lib/Title.svelte';
	export let data;
	const game = data.game;
	import { Rating, Button } from 'flowbite-svelte';
</script>

<h1 class="text-center text-4xl">{game.name}</h1>

<Form action="updateGame">
	<label for="name">Name</label>
	<input id="name" value={game.name} name="name" required />

	<label for="rating" value={game.rating}>Rating</label>
	<input type="number" id="rating" name="rating" value={game.rating} required />
	<select name="type" value={game.type} required>
		<option value="sandbox">Sandbox</option>
		<option value="platformer">Platformer</option>
		<option value="factory">Factory</option>
		<option value="rpg">RPG</option>
		<option value="action">Action</option>
	</select>
	<Button type="submit" color="green" outline>Update game</Button>
</Form>
