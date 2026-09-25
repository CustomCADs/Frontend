import { CartItem } from '@/app/types/cart-item';
import { useCartItemProduct } from './hooks/useCartItemProduct';
import { useItemMoney } from './hooks/useItemMoney';
import BaseItem from './base';
import DeliveryItem from './delivery';
import { Skeleton } from './skeleton';

export type Set = (val: number, acc?: boolean) => void;
type Props = { item: CartItem; set: { price: Set; cost: Set } };
const Item = ({ item, set }: Props) => {
	const { product, onRemovePrice } = useCartItemProduct(item.productId, {
		reset: () => set.price(0),
		addFrom: (price: number) => set.price(price, true),
	});
	const money = useItemMoney({ product: product?.price ?? 0, print: 0 });

	if (!product) return <Skeleton />;

	if (item.forDelivery)
		return (
			<DeliveryItem
				item={item}
				product={product}
				onRemovePrice={onRemovePrice}
				set={set}
			/>
		);

	return (
		<BaseItem
			product={product}
			money={money}
			onUpdate={{ remove: onRemovePrice }}
		/>
	);
};

export default Item;
