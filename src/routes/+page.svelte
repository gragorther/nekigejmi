<script lang="ts">
	import Form from '$lib/Form.svelte';
	import DivGrid from '$lib/DivGrid.svelte';
	import Box from '$lib/Box.svelte';
	import Title from '$lib/Title.svelte';
	export let data;
	const games = data.games;
	import { Rating, Button } from 'flowbite-svelte';
</script>

<h1 class="text-3xl font-bold underline">Hello World</h1>

<DivGrid>
	{#each games
		.sort((g1, g2) => {
			return g1.rating - g2.rating;
		})
		.reverse() as game}
		<Box>
			<Title>{game.name}</Title>
			<p>Type: {game.type}</p>
			<p>Rating: {game.rating}/10</p>
			<Rating total={10} size={35} rating={Number(game.rating)} />
			<Button href="/{game.id}" pill outline size="xl" color="blue">Edit</Button>
		</Box>
	{/each}
</DivGrid>
