import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import * as page from '@/app/utils/page';
import Card from './card';
import Info from './info';
// import Tags from './tags';

const Route = getRouteApi('/_public/gallery/$id');

const Product = () => {
	const loader = Route.useLoaderData();
	const query = useQuery(({ products }) =>
		products.gallery.single({ id: loader.productId, viewed: true }),
	);
	const product = query.data ?? loader.product;

	return (
		<div className={cn(page.className, 'justify-start gap-y-10')}>
			<h3 className='md:hidden text-3xl font-extrabold'>
				{product.name}
			</h3>
			<section className='w-full flex flex-col items-center gap-y-4 md:gap-x-8 md:gap-y-6'>
				<Card product={product} />
				<Info product={product} />
				{/* <Tags tags={product.tags} /> */}
			</section>
		</div>
	);
};

export default Product;
