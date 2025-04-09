import db from '$lib/db';

export async function load({ params }) {
	const id = parseInt(params.id);
	const game = await db.games.findFirst({ where: { id } });

	return { game };
}
// dodaj db update
