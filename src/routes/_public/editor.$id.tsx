import { createFileRoute } from '@tanstack/react-router';
import { queries } from '@customcads/react-sdk';

export const Route = createFileRoute('/_public/editor/$id')({
	component: () => () => <></>,
	loader: async ({ params, context: { queryClient } }) => {
		const { data: product } = await queryClient.fetchQuery(
			queries.products.gallery.single({ id: params.id }),
		);

		const { data: cad } = await queryClient.fetchQuery(
			queries.cads.single({ id: product.cadId }),
		);

		return {
			productId: product.id,
			cadId: cad.id,
			cadVolume: cad.volume,
		};
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Editor' }] }),
});
