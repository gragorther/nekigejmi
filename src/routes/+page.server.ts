import db from '$lib/db';

export async function load() {
	const games = await db.games.findMany();

	return {
		games: games
	};
}
