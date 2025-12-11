import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import { useEmptyTranslations } from '@/app/hooks/locales/translations/common';
import * as page from '@/app/utils/page';
import { useDropdowns } from './hooks/useDropdowns';
import Item from './item';

const Route = getRouteApi('/_public/gallery/');

const Gallery = () => {
	const { galleryQueryArgs } = Route.useLoaderData();
	const tEmpty = useEmptyTranslations();

	const { data: products } = useQuery(({ products }) =>
		products.gallery.all(galleryQueryArgs),
	);
	const dropdowns = useDropdowns(products?.count);

	return (
		<div
			className={cn(
				page.className,
				'gap-y-16 justify-between',
				'animate-none',
			)}
		>
			<div className='md:hidden flex flex-col justify-center gap-y-8'>
				<div className='flex gap-x-4'>
					<dropdowns.Categories />
					<dropdowns.Sortings />
				</div>
				<dropdowns.Searchbar />
			</div>
			<div className='hidden md:flex md:justify-center md:w-full md:gap-x-8'>
				<dropdowns.Categories />
				<dropdowns.Searchbar />
				<dropdowns.Sortings />
			</div>
			{products?.count ? (
				<ul
					className={cn(
						'grid', // common
						'grid-cols-1 gap-y-12', // mobile
						'md:grid-cols-3 md:gap-x-10 md:gap-y-10', // non-mobile
					)}
				>
					{products.items.map((x) => (
						<li key={x.id}>
							<Item product={x} />
						</li>
					))}
				</ul>
			) : (
				<span className='text-center text-lg md:text-2xl'>
					{tEmpty('products')}
				</span>
			)}
			<dropdowns.Pagination />
		</div>
	);
};

export default Gallery;
