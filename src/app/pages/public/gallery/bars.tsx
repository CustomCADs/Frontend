import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import Categories from '@/app/components/search/categories';
import Searchbar from '@/app/components/search/searchbar';
import Sortings from '@/app/components/search/sortings';

const Route = getRouteApi('/_public/gallery/');

const Bars = () => {
	const tPlaceholders = useFormTranslations('placeholders');

	const navigate = Route.useNavigate();
	const search = Route.useSearch();

	const { data: sortings } = useQuery(
		({ products }) => products.gallery.sortings,
	);

	return (
		<div className='w-full grid grid-cols-4 justify-items-center gap-y-8 gap-x-8 md:gap-x-0'>
			<section className='place-self-end col-span-2 md:col-span-1 order-1 md:order-1'>
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
			</section>
			<section className='order-3 md:col-span-2 col-span-4 md:order-2'>
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
			</section>
			<section className='place-self-start col-span-2 md:col-span-1 order-2 md:order-3'>
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
			</section>
		</div>
	);
};

export default Bars;
