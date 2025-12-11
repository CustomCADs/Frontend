import { cn } from '@/lib/utils/tailwindcss';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCartCalculator } from '@/app/hooks/features/carts/useCartCalculator';
import * as page from '@/app/utils/page';
import List from './list';
import Aside from './aside';

const Cart = () => {
	const tCart = useGalleryTranslations('cart');

	const [prices, setPrice] = useCartCalculator();
	const [costs, setCost] = useCartCalculator();

	return (
		<div className={cn(page.className, 'justify-start')}>
			<div className='w-full flex flex-col lg:flex-row md:justify-between gap-x-8 gap-y-6'>
				<section className='lg:min-w-9/16 flex flex-col gap-y-6 lg:gap-y-12'>
					<h3 className='text-3xl text-center font-extrabold'>
						{tCart('title')}
					</h3>
					<List
						set={{
							price: (productId, price, acc?: boolean) =>
								setPrice({
									id: productId,
									set: (prev) => (acc ? prev + price : price),
								}),
							cost: (id, cost, acc?: boolean) =>
								setCost({
									id: id,
									set: (prev) => (acc ? prev + cost : cost),
								}),
						}}
					/>
				</section>
				<Aside prices={prices} costs={costs} />
			</div>
		</div>
	);
};

export default Cart;
