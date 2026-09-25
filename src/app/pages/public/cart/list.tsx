import { cn } from '@/lib/utils';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { scroll } from '@/app/components/ui';
import Empty from './empty';
import Item from './item';

type Set = (productId: string, cost: number, acc?: boolean) => void;
type Props = { set: { price: Set; cost: Set } };
const List = ({ set }: Props) => {
	const { items } = useCartStore();

	return (
		<section
			className={cn(
				'overflow-clip lg:grow lg:min-w-lg md:min-w-md min-h-full w-full',
				'grow flex ps-4 pe-2 py-4 shadow-sm shadow-primary rounded-4xl animate-fade-in delay-500',
			)}
		>
			{items?.length ? (
				<scroll.Area className='w-full md:h-[75vh] h-[50vh] py-1 pe-5'>
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
			) : (
				<Empty />
			)}
		</section>
	);
};

export default List;
