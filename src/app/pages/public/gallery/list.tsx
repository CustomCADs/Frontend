import { ApiResult, GalleryAllProductsResponse } from '@customcads/react-sdk';
import { cn } from '@/lib/utils';
import Item from './item';
import Empty from './empty';

type Props = { products: ApiResult<GalleryAllProductsResponse> };
const List = ({ products }: Props) => {
	if (!products.count) return <Empty />;

	return (
		<ul
			className={cn(
				'grid', // common
				'grid-cols-1 gap-y-12', // mobile
				'md:grid-cols-3 md:gap-x-10 md:gap-y-10', // non-mobile
			)}
		>
			{products.items.map((x) => (
				<li key={x.id}>
					<Item product={x} />
				</li>
			))}
		</ul>
	);
};

export default List;
