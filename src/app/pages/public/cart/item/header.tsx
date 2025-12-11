import { GallerySingleProductResponse, useQuery } from '@customcads/react-sdk';

type Props = { product: GallerySingleProductResponse };
const Header = ({ product }: Props) => {
	const { data: image } = useQuery(({ images }) =>
		images.download({ id: product.imageId, relationType: 'Product' }),
	);

	return (
		<section className='flex flex-col items-start gap-x-3 gap-y-2'>
			<h4 className='text-xl font-semibold'>{product.name}</h4>
			<img src={image?.presignedUrl} className='w-30 h-30 rounded-xl' />
		</section>
	);
};

export default Header;
