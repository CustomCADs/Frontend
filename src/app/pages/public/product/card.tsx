import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import Cad from '@/app/components/cad';

type Props = { product: GallerySingleProductResponse; price: string };
const Card = ({ product: { cadId, category, description }, price }: Props) => {
	const tProduct = useGalleryTranslations('product');

	return (
		<article className='grow bg-secondary w-full flex flex-col items-center gap-y-4 px-4 py-4 border-2 rounded-sm shadow-shadow shadow-lg hover:shadow-xl transition duration-400'>
			<div className='w-full flex justify-between items-center gap-x-4 md:px-4'>
				<p className='flex gap-x-2 bg-background text-foreground text-sm md:text-lg font-bold px-4 py-2 rounded-lg shadow-shadow shadow-md'>
					<span>{tProduct('price')}:</span>
					<span>{price}</span>
				</p>
				<p className='flex gap-x-2 bg-background text-foreground text-sm md:text-lg font-bold px-4 py-2 rounded-lg shadow-shadow shadow-md'>
					<span>{tProduct('category')}:</span>
					<span>{category.name}</span>
				</p>
			</div>
			<aside className='w-full h-[50vh] rounded-xl overflow-clip'>
				<Cad type='gallery' cadId={cadId} />
			</aside>
			<p>{description}</p>
		</article>
	);
};

export default Card;
