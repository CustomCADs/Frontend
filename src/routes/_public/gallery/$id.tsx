import Product from '@/app/pages/public/product';
import { queries } from '@customcads/react-sdk';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/gallery/$id')({
	loader: async ({ params, context: { queryClient } }) => {
		await queryClient.prefetchQuery(
			queries.products.gallery.single({ id: params.id }),
		);
	},
	component: Product,
	head: ({ params }) => ({
		meta: [{ title: `CustomCADs | Product ${params.id}` }],
	}),
});
