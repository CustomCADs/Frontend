import { useQuery } from '@customcads/react-sdk';
import { useThrottle } from '@/hooks/utils/useThrottle';
import { useMinimumLoadingTime } from '@/hooks/utils/useMinimumLoadingTime';
import Empty from '../empty';
import Skeleton from './skeleton';
import Item from './item';

type Props = { name: string };
const Preview = ({ name }: Props) => {
	const throttled = useThrottle(name, 500);
	const { data: products, isLoading } = useQuery(({ products }) =>
		products.gallery.all({ page: 1, limit: 4, name: throttled }),
	);

	const loading = useMinimumLoadingTime(isLoading, 400);
	if (!products || loading) return <Skeleton />;

	return (
		<section className='sm:min-h-50 md:min-h-75 lg:min-h-100 bg-secondary rounded-xl flex flex-col justify-start'>
			{products.count ? (
				products.items.map((x) => <Item key={x.id} product={x} />)
			) : (
				<Empty title />
			)}
		</section>
	);
};

export default Preview;
