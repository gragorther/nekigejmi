<script context="module" lang="ts">
	export const ssr = false; // Disable SSR (Server-side rendering) to use the API in the browser
</script>

<script lang="ts">
	let currentGame = '';
	let loading = false;
	let errorMessage = '';

	// Get OpenAI API key from environment variables
	const OPENAI_API_KEY = 'removed api key :3';

	async function generateGame() {
		loading = true;
		errorMessage = '';
		try {
			const response = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${OPENAI_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: 'gpt-4.1-nano', // Or 'gpt-4' if available and you have access
					messages: [
						{
							role: 'user',
							content: `Generate a fun and short name for a game about javascript`
						}
					],
					max_tokens: 50,
					temperature: 1
				})
			});

			const data = await response.json();

			// Check if the response is okay
			if (response.ok) {
				currentGame = data.choices[0].message.content.trim();
			} else {
				throw new Error(data.error?.message || 'Failed to generate game name.');
			}
		} catch (error) {
			errorMessage = error.message || 'Failed to generate game name. Please try again.';
		} finally {
			loading = false;
		}
	}
</script>

<main
	class="min-h-screen bg-gradient-to-r from-green-300 via-yellow-200 to-pink-300 p-10 flex items-center justify-center"
>
	<div class="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg">
		<h1 class="text-4xl font-bold text-gray-800 mb-4">Funny Game Name Generator</h1>
		<p class="text-xl text-gray-600 mb-6">
			Click the button below to get a funny game name from OpenAI!
		</p>
		<button
			on:click={generateGame}
			class="bg-blue-200 text-3xl rounded-md border-2 shadow-lg border-pink-500"
			>Generate game</button
		>
		{#if currentGame}
			<p class="text-4xl border-2 border-green-500 rounded-lg bg-slate-300 mt-4">{currentGame}</p>
		{/if}
		{#if errorMessage}
			<p>{errorMessage}</p>
		{/if}
	</div>
</main>
