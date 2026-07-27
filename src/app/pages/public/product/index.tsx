import { getRouteApi } from '@tanstack/react-router';
import { useSuspenseQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils';
import * as page from '@/app/utils/page';
import Card from './card';
import Info from './info';
import Tags from './tags';

const Route = getRouteApi('/_public/gallery/$id');

const Product = () => {
	const { id } = Route.useParams();
	const { data: product } = useSuspenseQuery(({ products }) =>
		products.gallery.single({ id, viewed: true }),
	);

	return (
		<div className={cn(page.className, 'justify-start gap-y-10')}>
			<h3 className='md:hidden text-3xl font-extrabold'>
				{product.name}
			</h3>
			<section className='w-full flex flex-col items-center gap-y-4 md:gap-x-8 md:gap-y-6'>
				<Tags>{product.tags}</Tags>
				<Card product={product} />
				<Info product={product} />
			</section>
		</div>
	);
};

export default Product;
