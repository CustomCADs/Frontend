import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import * as page from '@/app/utils/page';
import Bars from './bars';
import List from './list';
import GalleryPagination from './pagination';

const Route = getRouteApi('/_public/gallery/');

const Gallery = () => {
	const { galleryQueryArgs } = Route.useLoaderData();
	const { data: products } = useQuery(({ products }) =>
		products.gallery.all(galleryQueryArgs),
	);

	const hasProducts = products && products.count !== 0;
	return (
		<div className={cn(page.className, 'gap-y-16 justify-between')}>
			<Bars />
			<List products={products} />
			{hasProducts && <GalleryPagination count={products.count} />}
		</div>
	);
};

export default Gallery;
