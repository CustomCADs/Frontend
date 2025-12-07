import { Link } from '@tanstack/react-router';
import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as dateTime from '@/app/utils/date-time';
import * as productTags from '@/app/utils/product-tags';
import useButtons from './hooks/useButtons';

type Props = { product: GallerySingleProductResponse };
const Info = ({ product: { id, creatorName, tags, uploadedAt } }: Props) => {
	const tProduct = useGalleryTranslations('product');

	const by = (
		<p className='text-start font-bold flex items-center gap-x-1'>
			<span>{tProduct('creator')}: </span>
			<Link to='.' className='underline underline-offset-5'>
				{creatorName}
			</Link>
		</p>
	);
	const at = (
		<p className='text-end font-bold'>
			<span className='border-2 rounded-xs p-1 ms-1'>
				{dateTime.format({ date: uploadedAt })}
			</span>
		</p>
	);

	const productIs = productTags.is(tags);
	const { add, like } = useButtons({ id, is: productIs });

	return (
		<div className='w-full px-2'>
			<div className='flex flex-col lg:hidden gap-y-5 px-2'>
				<div className='flex justify-between items-center'>
					<div className=''>{by}</div>
					<div className=''>{at}</div>
				</div>
				<div className='flex justify-between gap-x-4'>
					{like.mobile}
					{add.mobile}
				</div>
			</div>
			<div className='hidden lg:flex justify-between items-center gap-x-2 px-2'>
				{by}
				{like.desktop}
				{add.desktop}
				{at}
			</div>
		</div>
	);
};

export default Info;
