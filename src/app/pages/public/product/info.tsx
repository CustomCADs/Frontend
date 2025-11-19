import { Link } from '@tanstack/react-router';
import { GallerySingleProductResponse } from '@customcads/react-sdk';
import { Heart, ListPlus } from 'lucide-react';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as dateTime from '@/app/utils/date-time';
import { Button } from '@/app/components/ui/button';

type Props = { product: GallerySingleProductResponse };
const Info = ({ product: { creatorName, uploadedAt } }: Props) => {
	const tProduct = useGalleryTranslations('product');

	const buttons = (
		<div className='hidden order-2 col-span-4 md:flex justify-between gap-x-4 px-2'>
			<div className='flex items-center gap-x-2'>
				<Button
					variant='secondary'
					size='icon-lg'
					className='shadow-shadow shadow-md cursor-pointer'
				>
					<Heart className='scale-125' />
				</Button>
				<Button
					variant='secondary'
					size='lg'
					className='text-lg shadow-shadow shadow-md cursor-pointer'
				>
					{tProduct('like')}
				</Button>
			</div>
			<div className='flex items-center gap-x-2'>
				<Button
					variant='secondary'
					size='icon-lg'
					className='shadow-shadow shadow-md cursor-pointer'
				>
					<ListPlus className='scale-125' />
				</Button>
				<Button
					variant='secondary'
					size='lg'
					className='text-lg shadow-shadow shadow-md cursor-pointer'
				>
					{tProduct('add')}
				</Button>
			</div>
		</div>
	);
	const mobileButtons = (
		<div className='md:hidden col-span-8 flex justify-between gap-x-4 px-2'>
			<div className='flex items-center gap-x-2 cursor-pointer'>
				<Button
					variant='secondary'
					size='icon-lg'
					className='shadow-shadow shadow-md cursor-pointer'
				>
					<Heart />
				</Button>
				<Button
					variant='secondary'
					className='min-h-10 px-6 shadow-shadow shadow-md cursor-pointer'
				>
					{tProduct('like-short')}
				</Button>
			</div>
			<div className='flex items-center gap-x-2 cursor-pointer'>
				<Button
					variant='secondary'
					size='icon-lg'
					className='shadow-shadow shadow-md cursor-pointer'
				>
					<ListPlus />
				</Button>
				<Button
					variant='secondary'
					className='min-h-10 px-6 shadow-shadow shadow-md cursor-pointer'
				>
					{tProduct('add-short')}
				</Button>
			</div>
		</div>
	);

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
			{buttons}
			{mobileButtons}
		</div>
	);
};

export default Info;
