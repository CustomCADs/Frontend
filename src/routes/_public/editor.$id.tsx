import { createFileRoute } from '@tanstack/react-router';
import { queryCall } from '@customcads/react-sdk';
import Editor from '@/app/pages/public/editor';

export const Route = createFileRoute('/_public/editor/$id')({
	component: Editor,
	loader: async ({ params, context: { queryClient } }) => {
		const { data: product } = await queryCall(
			({ products }) => products.gallery.single({ id: params.id }),
			(opts) => queryClient.fetchQuery(opts),
		);
		const { data: cad } = await queryCall(
			({ cads }) => cads.single({ id: product.cadId }),
			(opts) => queryClient.fetchQuery(opts),
		);

		return { product, cad };
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Editor' }] }),
});
