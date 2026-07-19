import { Link } from '@tanstack/react-router';
import {
	useQuery,
	type GalleryAllProductsResponse,
} from '@customcads/react-sdk';
import { Banknote, Eye } from 'lucide-react';
import { ClassName } from '@/types/react';
import { cn } from '@/lib/utils';

type Props = ClassName & { product: GalleryAllProductsResponse };
const Item = ({ product, className }: Props) => {
	const { data: image } = useQuery(
		({ images }) =>
			images.download({ id: product.imageId, relationType: 'Product' }),
		!!product,
	);

	return (
		<Link
			to='/gallery/$id'
			params={{ id: product.id }}
			className={cn(
				'max-h-50 md:max-h-75 bg-secondary text-secondary-foreground border-gray border-2 rounded-md shadow-primary shadow-md',
				'flex flex-col justify-between gap-y-4 p-4',
				'hover:brightness-80 hover:scale-105 hover:shadow-xl transition-normal duration-300',
				className,
			)}
		>
			<img
				src={image?.presignedUrl}
				className='basis-full max-h-30 md:max-h-52 object-cover rounded-sm'
			/>
			<div className='flex justify-around items-center gap-x-10'>
				<div className='flex gap-x-2'>
					<Eye />
					{product.counts.views}
				</div>
				<span className='text-sm sm:text-md md:text-lg truncate font-bold'>
					{product.name}
				</span>
				<div className='flex gap-x-2'>
					<Banknote />
					{product.counts.purchases}
				</div>
			</div>
		</Link>
	);
};

export default Item;
