import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useMoney } from '@/app/hooks/locales/useMoney';
import Cad from '@/app/components/cad';
import Detail from './detail';

type Props = { product: GallerySingleProductResponse };
const Card = ({ product }: Props) => {
	const tProduct = useGalleryTranslations('product');

	const price = useMoney(product.price);
	const { name, description, category, cadId } = product;

	return (
		<article className='grow bg-secondary w-full flex flex-col items-center gap-y-4 px-4 py-4 border-2 rounded-sm shadow-shadow shadow-lg hover:shadow-xl transition duration-400'>
			<div className='w-full flex justify-between items-center gap-x-4 md:px-4'>
				<Detail name={tProduct('price')} value={price} />
				<h3 className='hidden md:inline text-3xl font-extrabold'>
					{name}
				</h3>
				<Detail name={tProduct('category')} value={category.name} />
			</div>
			<aside className='w-full h-[50vh] md:h-[60vh] rounded-xl overflow-clip'>
				<Cad type='gallery' cadId={cadId} />
			</aside>
			<p>{description}</p>
		</article>
	);
};

export default Card;
