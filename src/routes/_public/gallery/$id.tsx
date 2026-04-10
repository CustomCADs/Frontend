import Product from '@/app/pages/public/product';
import { productsApi } from '@customcads/react-sdk';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/gallery/$id')({
	loader: async ({ params }) => {
		const { data: product } = await productsApi.gallery.single({
			id: params.id,
		});

		return { productId: params.id, product };
	},
	component: Product,
	head: ({ loaderData, params }) => {
		const title = loaderData?.product
			? `CustomCADs | Product "${loaderData.product.name}"`
			: `CustomCADs | Product "${params.id}"`;

		return { meta: [{ title }] };
	},
});
