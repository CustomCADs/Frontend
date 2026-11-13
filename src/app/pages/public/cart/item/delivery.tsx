import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { CartItemForDelivery } from '@/app/types/cart-item';
import { useCartItemCustomization } from './hooks/useCartItemCustomization';
import { useItemMoney } from './hooks/useItemMoney';
import BaseItem from './base';
import { Skeleton } from './skeleton';
import { Set } from '.';

type Props = {
	item: CartItemForDelivery;
	product: GallerySingleProductResponse;
	set: { price: Set; cost: Set };
	onRemovePrice: VoidFunction;
};
const DeliveryItem = ({ item, product, set, onRemovePrice }: Props) => {
	const { customization, onRemoveCost } = useCartItemCustomization(
		item.customizationId,
		{
			reset: () => set.cost(0),
			addFrom: (cost: number) => set.cost(cost, true),
		},
	);

	const money = useItemMoney({
		product: product?.price ?? 0,
		print: customization?.cost ?? 0,
		quantity: item.quantity,
	});

	if (!customization) return <Skeleton />;

	return (
		<BaseItem
			forDelivery
			money={money}
			item={item}
			product={product}
			customization={customization}
			onUpdate={{
				remove: () => {
					onRemovePrice();
					onRemoveCost();
				},
				noDelivery: () => {
					set.price(-1 * product.price * (item.quantity - 1), true);
					set.cost(-1 * customization.cost * item.quantity, true);
				},
				increment: () => {
					set.price(product.price, true);
					set.cost(customization.cost, true);
				},
				decrement: () => {
					set.price(-1 * product.price, true);
					set.cost(-1 * customization.cost, true);
				},
			}}
		/>
	);
};

export default DeliveryItem;
