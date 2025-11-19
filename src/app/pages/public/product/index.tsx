import { getRouteApi } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import { cn } from '@/lib/utils/tailwindcss';
import { useMoney } from '@/app/hooks/locales/useMoney';
import Loader from '@/app/components/loading';
import * as page from '@/app/utils/page';
import Card from './card';
import Info from './info';
// import Tags from './tags';

const Route = getRouteApi('/_public/gallery/$id');

const Product = () => {
	const { id } = Route.useParams();
	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id }),
	);

	const price = useMoney(product?.price ?? 0);
	if (!product) return <Loader />;

	return (
		<div className={cn(page.className, 'justify-start gap-y-10')}>
			<h3 className='text-3xl font-extrabold'>{product.name}</h3>
			<section className='w-full flex flex-col items-center gap-y-4 md:gap-x-8 md:gap-y-6'>
				<Card product={product} price={price} />
				<Info product={product} />
				{/* <Tags tags={product.tags} /> */}
			</section>
		</div>
	);
};

export default Product;
