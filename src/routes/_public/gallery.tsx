import z from 'zod';
import { createFileRoute } from '@tanstack/react-router';
import { categoriesApi, queries } from '@customcads/react-sdk';
import { OnlyParam } from '@/lib/utils/typescript';
import * as limits from '@/app/constants/limits';
import Gallery from '@/app/pages/public/gallery';

export const Route = createFileRoute('/_public/gallery')({
	validateSearch: z.object({
		name: z.string().optional(),
		categoryName: z.string().optional(),
		sortingType: z.string().optional(),
		sortingDirection: z.string().optional(),
		page: z.number().optional(),
		limit: z.number().optional(),
	}),
	component: Gallery,
	loaderDeps: ({ search }) => ({
		name: search.name,
		categoryName: search.categoryName,
		sortingType: search.sortingType,
		sortingDirection: search.sortingDirection,
		page: search.page ?? 1,
		limit: search.limit ?? limits.GALLERY.default,
	}),
	loader: async ({ deps, context }) => {
		const { queryClient } = context;

		let category = null;
		if (deps.categoryName) {
			const { data } = await categoriesApi.single({
				type: 'by-name',
				name: deps.categoryName,
			});
			category = data;
		}

		const { gallery } = queries.products;
		const galleryQueryArgs: OnlyParam<typeof gallery.all> = {
			name: deps.name,
			categoryId: category?.id,
			sortingType: deps.sortingType,
			sortingDirection: deps.sortingDirection,
			page: deps.page,
			limit: deps.limit,
		};
		await queryClient.prefetchQuery(gallery.all(galleryQueryArgs));

		await queryClient.prefetchQuery(queries.categories.all);
		await queryClient.prefetchQuery(queries.products.gallery.sortings);

		return { galleryQueryArgs };
	},
});
