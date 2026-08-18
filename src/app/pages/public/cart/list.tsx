import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { scroll } from '@/app/components/ui';
import Empty from './empty';
import Item from './item';

type Set = (productId: string, cost: number, acc?: boolean) => void;
type Props = { set: { price: Set; cost: Set } };
const List = ({ set }: Props) => {
	const { items } = useCartStore();
	if (!items?.length) return <Empty />;

	return (
		<scroll.Area className='w-full h-[50vh] lg:h-[75vh] py-1 pe-5'>
			<ul className='grid grid-cols-1 gap-y-2'>
				{items.map((x) => (
					<li key={x.productId}>
						<Item
							item={x}
							set={{
								cost: (cost, acc?: boolean) =>
									set.cost(x.productId, cost, acc),
								price: (price, acc?: boolean) =>
									set.price(x.productId, price, acc),
							}}
						/>
					</li>
				))}
			</ul>
		</scroll.Area>
	);
};

export default List;
