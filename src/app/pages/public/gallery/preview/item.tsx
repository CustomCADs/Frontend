import { Link } from '@tanstack/react-router';
import { GalleryAllProductsResponse } from '@customcads/react-sdk';
import { item } from '@/app/components/ui';
import PresignedImage from '@/app/components/image';

type Props = { product: GalleryAllProductsResponse };
const Item = ({ product }: Props) => (
	<Link to='/gallery/$id' params={{ id: product.id }} preloadDelay={500}>
		<item.Root className='hover:bg-card/75 transition-all duration-300'>
			<item.Media>
				<PresignedImage
					request={{ id: product.imageId, relationType: 'Product' }}
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

export default Item;
