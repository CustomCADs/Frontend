import { type ViewedProduct } from '@customcads/react-sdk';
import { usePrivateTranslations } from '@/app/hooks/locales/translations/pages/private';
import Scroller from '../../scroller';
import Track from './track';
import Item from './item';

type Props = { track: boolean; products: Array<ViewedProduct> };
const Products = ({ track, products }: Props) => {
	const tProfile = usePrivateTranslations('account.profile');

	return (
		<Scroller
			title={`${tProfile('viewed-products')} (${products.length})`}
			items={products.map(({ id, viewedAt }) => (
				<Item key={id} id={id} viewedAt={viewedAt} />
			))}
			className='w-65 lg:w-175 xl:w-250'
		>
			<Track track={track} />
		</Scroller>
	);
};

export default Products;
