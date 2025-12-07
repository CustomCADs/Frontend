import { CartItem } from '@/app/types/cart-item';
import ItemNoDelivery from './no-delivery';
import ItemForDelivery from './for-delivery';

type Props = {
	item: CartItem;
	set: {
		price: (val: number, acc?: boolean) => void;
		cost: (val: number, acc?: boolean) => void;
	};
};
const Item = ({ item, set }: Props) => {
	const price = {
		reset: () => set.price(0),
		addTo: (price: number) => set.price(price, true),
	};
	if (!item.forDelivery)
		return (
			<ItemNoDelivery
				key={item.productId}
				item={item}
				resetPrice={price.reset}
				addToPrice={price.addTo}
			/>
		);

	const cost = {
		reset: () => set.cost(0),
		addTo: (cost: number) => set.cost(cost, true),
	};
	return (
		<ItemForDelivery
			key={item.productId}
			item={item}
			reset={{
				price: price.reset,
				cost: cost.reset,
			}}
			addTo={{
				price: price.addTo,
				cost: cost.addTo,
			}}
		/>
	);
};

export default Item;
