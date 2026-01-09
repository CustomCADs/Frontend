import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import * as limits from '@/app/constants/limits';
import Categories from '@/app/components/search/categories';
import Searchbar from '@/app/components/search/searchbar';
import Sortings from '@/app/components/search/sortings';
import Pagination from '@/app/components/search/pagination';

const Route = getRouteApi('/_public/gallery/');

export const useDropdowns = (count?: number) => {
	const tPlaceholders = useFormTranslations('placeholders');

	const navigate = Route.useNavigate();
	const search = Route.useSearch();

	const { data: sortings } = useQuery(
		({ products }) => products.gallery.sortings,
	);

	return {
		Categories: () => (
			<Categories
				getCategory={() => search.categoryName}
				updateCategory={(category) => {
					navigate({
						search: (prev) => ({
							...prev,
							categoryName: category?.name,
						}),
					});
				}}
			/>
		),
		Searchbar: () => (
			<Searchbar
				placeholder={tPlaceholders('search-products')}
				getSearch={() => search.name}
				updateSearch={(name) => {
					navigate({
						search: (prev) => ({
							...prev,
							// eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
							name: name || undefined,
						}),
					});
				}}
			/>
		),
		Sortings: () => (
			<Sortings
				sortings={sortings}
				getSorting={() => ({
					type: search.sortingType,
					direction: search.sortingDirection,
				})}
				updateSorting={({ type, direction }) => {
					navigate({
						search: (prev) => ({
							...prev,
							sortingType: type ?? prev.sortingType,
							sortingDirection: direction,
						}),
					});
				}}
			/>
		),
		Pagination: () => (
			<Pagination
				total={count ?? 0}
				defaultPagination={{
					page: search.page ?? 1,
					limit: search.limit ?? limits.GALLERY.default,
				}}
				navigate={({ page, limit }) =>
					navigate({
						search: (prev) => ({
							...prev,
							page,
							limit,
						}),
					})
				}
			/>
		),
	};
};
