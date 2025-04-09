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
