import db from '$lib/db';
import { fail } from '@sveltejs/kit';

export async function load() {
	const games = await db.games.findMany();

	return {
		games: games
	};
}

export const actions = {
	addGame: async (event) => {
		console.log('kebab');
		const form = await event.request.formData();
		const id = parseInt(form.get('id'));
		const rating = parseInt(form.get('rating'));
		const type = form.get('type');
		const name = form.get('name');
		if (typeof id !== 'number') {
			return fail(500, { id, incorrect: true });
		}
		if (typeof rating !== 'number') {
			return fail(500, { id, incorrect: true });
		}
		if (typeof type !== 'string') {
			return fail(500, { type, incorrect: true });
		}
		if (typeof name !== 'string') {
			return fail(500, { name, incorrect: true });
		}

		// Dodaj novega prijatelja
		await db.games.create({
			data: {
				id: id,
				rating: rating,
				type: type,
				name: name
			}
		});
	},
	removeGame: async (event) => {
		const form = await event.request.formData();
		const game = form.get('game');
		await db.games.delete({
			where: { id: Number(game) }
		});
	}
};
