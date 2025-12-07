import { Link } from '@tanstack/react-router';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import Item from './item';

type Set = (productId: string, cost: number, acc?: boolean) => void;
type Props = { set: { price: Set; cost: Set } };
const List = ({ set }: Props) => {
	const tCart = useGalleryTranslations('cart');
	const { items } = useCartStore();

	return (
		<div className='ps-4 pe-2 py-4 overflow-clip shadow-sm shadow-primary rounded-4xl'>
			<ScrollArea className='h-[50vh] lg:h-[75vh] lg:pe-5'>
				<ul className='grid grid-cols-1 gap-y-2'>
					{items?.length ? (
						items.map((x) => (
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
						))
					) : (
						<div className='w-full h-full flex justify-center items-center'>
							<Link
								to='/gallery'
								className='italic underline underline-offset-4 text-lg'
							>
								{tCart('no-items')}
							</Link>
						</div>
					)}
				</ul>
			</ScrollArea>
		</div>
	);
};

export default List;
