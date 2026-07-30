import { Link } from '@tanstack/react-router';
import { GalleryAllProductsResponse, useQuery } from '@customcads/react-sdk';
import { item } from '@/app/components/ui';

type Props = { product: GalleryAllProductsResponse };
const Item = ({ product }: Props) => {
	const { data: image } = useQuery(({ images }) =>
		images.download({ id: product.imageId, relationType: 'Product' }),
	);

	return (
		<Link to='/gallery/$id' params={{ id: product.id }} preloadDelay={500}>
			<item.Root className='hover:bg-card/75 transition-all duration-300'>
				<item.Media>
					<img
						src={image?.presignedUrl}
						className='w-16 md:w-24 lg:w-32 aspect-square rounded-2xl'
					/>
				</item.Media>
				<item.Content>
					<item.Title className='text-sm sm:text-base md:text-lg'>
						{product.name}
					</item.Title>
				</item.Content>
			</item.Root>
		</Link>
	);
};

export default Item;
