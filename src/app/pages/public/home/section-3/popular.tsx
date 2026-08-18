import { useQuery } from '@customcads/react-sdk';
import { AppError } from '@/types/errors';
import { TAGS } from '@/app/constants/global';
import { POPULAR as LIMIT } from '@/app/constants/limits';
import { carousel } from '@/app/components/ui';
import Loader from '@/app/components/loading';
import Item from '../../gallery/item';
import Products from './products';

const PopularProducts = () => {
	const { data: tags } = useQuery(({ tags }) => tags.all);
	if (!tags) return <Loader />;

	const tag = tags.find((x) => x.name === TAGS.POPULAR);
	if (!tag)
		throw new AppError({
			title: 'Missing Tag.',
			tip: 'Please contact our Support team.',
			message: `No "${TAGS.POPULAR}}" Tag found.`,
		});

	return (
		<carousel.Root opts={{ loop: true, dragFree: true, slidesToScroll: 1 }}>
			<carousel.Content className='px-6 py-10 max-w-70 sm:max-w-140 lg:max-w-220 xl:max-w-280 select-none'>
				<Products limit={LIMIT.default} tag={tag}>
					{(x) => (
						<carousel.Item
							key={x.id}
							className='sm:basis-1/2 lg:basis-1/3'
						>
							<Item product={x} className='aspect-square' />
						</carousel.Item>
					)}
				</Products>
			</carousel.Content>
			<carousel.Previous />
			<carousel.Next />
		</carousel.Root>
	);
};

export default PopularProducts;
