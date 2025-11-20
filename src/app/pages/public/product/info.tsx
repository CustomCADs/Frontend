import { Link } from '@tanstack/react-router';
import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as dateTime from '@/app/utils/date-time';
import useButtons from './hooks/useButtons';

type Props = { product: GallerySingleProductResponse };
const Info = ({ product: { id, creatorName, uploadedAt } }: Props) => {
	const tProduct = useGalleryTranslations('product');
	const { add, like } = useButtons({ id });

	return (
		<div className='w-full grid grid-cols-8 justify-between items-center gap-x-2 gap-y-6 px-4'>
			<p className='col-span-3 md:col-span-2 md:order-1 text-start font-bold'>
				<span>{tProduct('creator')}: </span>
				<Link to='.' className='underline underline-offset-5'>
					{creatorName}
				</Link>
			</p>
			<p className='basis-2/3 col-span-5 md:col-span-2 md:order-4 text-end font-bold'>
				<span className='border-2 rounded-xs p-1 ms-1'>
					{dateTime.format({ date: uploadedAt })}
				</span>
			</p>
			<div className='hidden order-2 col-span-4 md:flex justify-between gap-x-4 px-2'>
				{like.desktop}
				{add.desktop}
			</div>
			<div className='md:hidden col-span-8 flex justify-between gap-x-4 px-2'>
				{like.mobile}
				{add.mobile}
			</div>
		</div>
	);
};

export default Info;
