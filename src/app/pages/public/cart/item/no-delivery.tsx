import { useNavigate } from '@tanstack/react-router';
import { useQuery } from '@customcads/react-sdk';
import type { CartItemNoDelivery } from '@/app/types/cart-item';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import Loader from '@/app/components/loading';
import { is } from '@/app/utils/product-tags';
import { useItemMoney } from './hooks/useItemMoney';
import { useCartQuantitySync } from './hooks/useCartQuantitySync';
import Money from '../money';
import Header from './header';
import Buttons from './buttons';

type Props = {
	item: CartItemNoDelivery;
	resetPrice: VoidFunction;
	addToPrice: (price: number) => void;
};
const ItemNoDelivery = ({ item, ...props }: Props) => {
	const navigate = useNavigate();
	const updates = useCartUpdates();

	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id: item.productId }),
	);
	useCartQuantitySync({
		reset: props.resetPrice,
		add: () => product && props.addToPrice(product.price),
		deps: [product],
	});

	const money = useItemMoney({
		product: product?.price ?? 0,
		print: 0,
	});

	if (!product)
		return (
			<div className='flex justify-center py-8'>
				<Loader size={10} />
			</div>
		);

	const remove = () => {
		props.addToPrice(-product.price);
		updates.cart.remove(item.productId);
	};

	return (
		<div className='relative grid grid-cols-3 justify-between items-stretch gap-x-2 border-2 p-3 rounded-md'>
			<div className='col-span-1'>
				<Header product={product} />
			</div>
			<div className='col-span-2 flex items-center'>
				<Money money={money} withSigns className='italic font-bold' />
			</div>
			<div className='col-span-6 h-full md:absolute right-3 bottom-0 pt-4 md:pb-4'>
				<Buttons
					isPrintable={is(product.tags).printable}
					onDeliveryChange={() =>
						navigate({
							to: '/editor/$id',
							params: { id: product.id },
						})
					}
					onRemoveClick={remove}
				/>
			</div>
		</div>
	);
};

export default ItemNoDelivery;
