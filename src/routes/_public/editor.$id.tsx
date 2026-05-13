import { createFileRoute } from '@tanstack/react-router';
import { query } from '@customcads/react-sdk';
import Editor from '@/app/pages/public/editor';

export const Route = createFileRoute('/_public/editor/$id')({
	component: Editor,
	loader: async ({ params, context: { queryClient } }) => {
		const { data: product } = await query.fetchQuery(
			({ products }) => products.gallery.single({ id: params.id }),
			queryClient,
		);
		const { data: cad } = await query.fetchQuery(
			({ cads }) => cads.single({ id: product.cadId }),
			queryClient,
		);

		return { product, cad };
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Editor' }] }),
});
