import { cn } from '@/lib/utils';
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
			<div className='w-full lg:min-h-[75vh] flex flex-col lg:flex-row md:justify-between gap-x-8 gap-y-6'>
				<section className='lg:grow flex flex-col gap-y-6 lg:gap-y-12 animate-fade-in delay-500'>
					<h3 className='text-3xl text-center font-extrabold'>
						{tCart('title')}
					</h3>
					<div className='h-full flex ps-4 pe-2 py-4 overflow-clip shadow-sm shadow-primary rounded-4xl'>
						<List
							set={{
								price: (productId, price, acc?: boolean) =>
									setPrice({
										id: productId,
										set: (prev) =>
											acc ? prev + price : price,
									}),
								cost: (id, cost, acc?: boolean) =>
									setCost({
										id: id,
										set: (prev) =>
											acc ? prev + cost : cost,
									}),
							}}
						/>
					</div>
				</section>
				<Aside prices={prices} costs={costs} />
			</div>
		</div>
	);
};

export default Cart;
