import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import * as page from '@/app/utils/page';
import Bars from './bars';
import List from './list';
import GalleryPagination from './pagination';

const Route = getRouteApi('/_public/gallery/');

const Gallery = () => {
	const loader = Route.useLoaderData();
	const query = useQuery(({ products }) =>
		products.gallery.all(loader.requestParams),
	);
	const result = query.data ?? loader.result;

	return (
		<div className={cn(page.className, 'gap-y-16 justify-between')}>
			<Bars />
			<List products={result} />
			{result.count !== 0 && <GalleryPagination count={result.count} />}
		</div>
	);
};

export default Gallery;
