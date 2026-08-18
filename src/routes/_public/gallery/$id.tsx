import Product from '@/app/pages/public/product';
import { query } from '@customcads/react-sdk';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/gallery/$id')({
	loader: async ({ params, context: { queryClient } }) => {
		const { data: product } = await query.fetchQuery(
			({ products }) => ({
				...products.gallery.single({ id: params.id }),
				staleTime: 10_000,
			}),
			queryClient,
		);

		return { productId: params.id, productName: product.name };
	},
	component: Product,
	head: ({ loaderData, params }) => {
		const title = loaderData
			? `CustomCADs | Product "${loaderData.productName}"`
			: `CustomCADs | Product "${params.id}"`;

		return { meta: [{ title }] };
	},
});
