import { getRouteApi } from '@tanstack/react-router';
import { useSuspenseQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils';
import * as page from '@/app/utils/page';
import Bars from './bars';
import List from './list';
import GalleryPagination from './pagination';

const Route = getRouteApi('/_public/gallery/');

const Gallery = () => {
	const { requestParams } = Route.useLoaderData();
	const { data: result } = useSuspenseQuery(({ products }) =>
		products.gallery.all(requestParams),
	);

	return (
		<div className={cn(page.className, 'gap-y-16 justify-between')}>
			<Bars />
			<List products={result} />
			{result.count !== 0 && <GalleryPagination count={result.count} />}
		</div>
	);
};

export default Gallery;
