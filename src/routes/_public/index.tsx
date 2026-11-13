import { createFileRoute } from '@tanstack/react-router';
import { query } from '@customcads/react-sdk';
import { TAGS } from '@/app/constants/global';
import Home from '@/app/pages/public/home';

export const Route = createFileRoute('/_public/')({
	component: Home,
	loader: async ({ context: { queryClient } }) => {
		try {
			const { data: tag } = await query.fetchQuery(
				({ tags }) =>
					tags.single({ type: 'by-name', name: TAGS.POPULAR }),
				queryClient,
			);
			const tagIds = [tag.id];

			const { data } = await query.fetchQuery(
				({ products }) =>
					products.gallery.all({ limit: 12, page: 1, tagIds }),
				queryClient,
			);

			return { hasPopularProducts: data.count > 0 };
		} catch {
			return { hasPopularProducts: false };
		}
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Home' }] }),
});
