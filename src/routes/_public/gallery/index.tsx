import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import {
	query,
	type GalleryAllProductsRequest,
	type SingleCategoryRequest,
} from '@customcads/react-sdk';
import * as limits from '@/app/constants/limits';
import Gallery from '@/app/pages/public/gallery';
import Skeleton from '@/app/pages/public/gallery/skeleton';

export const Route = createFileRoute('/_public/gallery/')({
	validateSearch: z.object({
		name: z.string().optional(),
		categoryName: z.string().optional(),
		tags: z.array(z.string()).optional(),
		sortingType: z.string().optional(),
		sortingDirection: z.string().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	}),
	component: Gallery,
	pendingComponent: Skeleton,
	loaderDeps: ({ search }) => ({
		name: search.name,
		tags: search.tags,
		categoryName: search.categoryName,
		sortingType: search.sortingType,
		sortingDirection: search.sortingDirection,
		page: search.page ?? 1,
		limit: search.limit ?? limits.GALLERY.default,
	}),
	loader: async ({ deps, context: { queryClient } }) => {
		const requestParams: GalleryAllProductsRequest = {
			name: deps.name,
			sortingType: deps.sortingType,
			sortingDirection: deps.sortingDirection,
			page: deps.page,
			limit: deps.limit,
		};

		if (deps.categoryName) {
			const categoryRequestParams: SingleCategoryRequest = {
				type: 'by-name',
				name: deps.categoryName,
			};

			const { data: category } = await query.fetchQuery(
				({ categories }) => categories.single(categoryRequestParams),
				queryClient,
			);
			requestParams.categoryId = category.id;
		}

		if (deps.tags) {
			const { data: tags } = await query.fetchQuery(
				({ tags }) => tags.all,
				queryClient,
			);
			requestParams.tagIds = tags
				.filter((x) => deps.tags?.includes(x.name))
				.map((x) => x.id);
		}

		query.prefetchQuery(
			({ products }) => products.gallery.all(requestParams),
			queryClient,
		);

		return { requestParams };
	},
	head: () => ({ meta: [{ title: 'CustomCADs | Gallery' }] }),
});
