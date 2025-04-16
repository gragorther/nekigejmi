import db from '$lib/db';
import { fail } from '@sveltejs/kit';

export async function load({ params }) {
	const id = parseInt(params.id);
	const game = await db.games.findFirst({ where: { id } });

	return { game };
}
// dodaj db update
export const actions = {
	updateGame: async (event) => {
		const id = parseInt(event.params.id);

		const form = await event.request.formData();
		const rating = parseInt(form.get('rating'));
		const type = form.get('type');
		const name = form.get('name');

		if (typeof rating !== 'number') {
			return fail(500, { rating, incorrect: true });
		}
		if (typeof type !== 'string') {
			return fail(500, { type, incorrect: true });
		}
		if (typeof name !== 'string') {
			return fail(500, { name, incorrect: true });
		}

		await db.games.update({
			where: { id: id },

			data: {
				rating: rating,
				type: type,
				name: name
			}
		});
	}
};
