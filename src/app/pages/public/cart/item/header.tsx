import { GallerySingleProductResponse } from '@customcads/react-sdk';
import PresignedImage from '@/app/components/image';

type Props = { product: GallerySingleProductResponse };
const Header = ({ product }: Props) => (
	<section className='flex flex-col items-start gap-x-3 gap-y-2'>
		<h4 className='text-xl font-semibold'>{product.name}</h4>
		<PresignedImage
			request={{ id: product.imageId, relationType: 'Product' }}
			className='w-30 h-30 rounded-xl'
		/>
	</section>
);

export default Header;
