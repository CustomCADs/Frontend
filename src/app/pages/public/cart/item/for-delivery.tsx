import { useQuery } from '@customcads/react-sdk';
import type { CartItemForDelivery } from '@/app/types/cart-item';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import Loader from '@/app/components/loading';
import { useItemMoney } from './hooks/useItemMoney';
import Quantity from './quantity';
import { useCartQuantitySync } from './hooks/useCartQuantitySync';
import Buttons from './buttons';
import Header from './header';
import Money from '../money';

type Props = {
	item: CartItemForDelivery;
	reset: { price: VoidFunction; cost: VoidFunction };
	addTo: { price: (price: number) => void; cost: (cost: number) => void };
};
const ItemForDelivery = ({ item, ...props }: Props) => {
	const updates = useCartUpdates();

	const { data: product } = useQuery(({ products }) =>
		products.gallery.single({ id: item.productId }),
	);
	useCartQuantitySync({
		reset: props.reset.price,
		add: () => product && props.addTo.price(product.price),
		deps: [product],
	});

	const { data: customization } = useQuery(({ customizations }) =>
		customizations.single({ id: item.customizationId }),
	);
	useCartQuantitySync({
		reset: props.reset.cost,
		add: () => customization && props.addTo.cost(customization.cost),
		deps: [customization],
	});

	const money = useItemMoney({
		product: product?.price ?? 0,
		print: customization?.cost ?? 0,
	});
	if (!product || !customization) return <Loader />;

	const remove = () => {
		props.addTo.price(-product.price * item.quantity);
		props.addTo.cost(-customization.cost * item.quantity);
		updates.cart.remove(item.productId);
	};

	const setNoDelivery = async () => {
		props.addTo.price(-1 * product.price * (item.quantity - 1));
		props.addTo.cost(-1 * customization.cost * item.quantity);
		await updates.item.delivery.off(item.productId);
	};

	const quantity = {
		increment: async () => {
			props.addTo.price(product.price);
			props.addTo.cost(customization.cost);
			await updates.item.quantity.increment(item.productId);
		},
		decrement: async () => {
			if (item.quantity === 1) return;
			props.addTo.price(-1 * product.price);
			props.addTo.cost(-1 * customization.cost);
			await updates.item.quantity.decrement(item.productId);
		},
	};

	return (
		<div className='relative grid grid-cols-3 justify-start items-stretch border-2 p-3 rounded-md'>
			<div className='col-span-1'>
				<Header product={product} />
			</div>
			<div className='col-span-2 flex justify-center md:justify-start items-center'>
				<Money money={money} withSigns className='italic font-bold' />
			</div>
			<div className='col-span-6 h-full md:absolute right-3 bottom-0 pt-4 md:pb-4'>
				<Buttons
					onDeliveryChange={setNoDelivery}
					onRemoveClick={remove}
					isPrintable
					forDelivery={item.forDelivery}
				>
					<Quantity
						value={item.quantity}
						increment={quantity.increment}
						decrement={quantity.decrement}
					/>
				</Buttons>
			</div>
		</div>
	);
};

export default ItemForDelivery;
