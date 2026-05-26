import { useState } from 'react';
import { HeartMinus, HeartPlus, ListCheck, ListPlus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { Button } from '@/app/components/ui';
import * as productTags from '@/app/utils/product-tags';
import AddToCartButton from '../add';

type Props = { id: string; is: ReturnType<typeof productTags.is> };
const useButtons = (product: Props) => {
	const tProduct = useGalleryTranslations('product');
	const { items } = useCartStore();

	const [isLiked, setIsLiked] = useState(false); // TODO: implement real Like mechanism
	const toggleIsLiked = () => setIsLiked((prev) => !prev);

	const isAlreadyLiked = isLiked;
	const like = {
		Icon: isAlreadyLiked ? HeartMinus : HeartPlus,
		text: ({ isShort }: { isShort: boolean }) => {
			if (isAlreadyLiked) {
				return isShort ? tProduct('liked-short') : tProduct('liked');
			}
			return isShort ? tProduct('like-short') : tProduct('like');
		},
		className: cn(
			'shadow-shadow shadow-md cursor-pointer',
			isLiked && 'bg-pink-700 hover:bg-pink-800',
		),
	};

	const isAlreadyAdded = !!items?.find((i) => i.productId === product.id);
	const add = {
		Icon: isAlreadyAdded ? ListCheck : ListPlus,
		text: ({ isShort }: { isShort: boolean }) => {
			if (isAlreadyAdded) {
				return isShort ? tProduct('added-short') : tProduct('added');
			}
			return isShort ? tProduct('add-short') : tProduct('add');
		},
		className: cn(
			'shadow-shadow shadow-md',
			isAlreadyAdded ? 'opacity-80 hover:bg-secondary' : 'cursor-pointer',
		),
	};

	return {
		like: {
			mobile: (
				<div className='flex items-center gap-x-2 cursor-pointer'>
					<Button
						onClick={toggleIsLiked}
						variant='secondary'
						size='icon-lg'
						className={like.className}
					>
						<like.Icon />
					</Button>
					<Button
						onClick={toggleIsLiked}
						variant='secondary'
						className={cn('min-h-10 px-4', like.className)}
					>
						{like.text({ isShort: true })}
					</Button>
				</div>
			),
			desktop: (
				<div className='flex items-center gap-x-2'>
					<Button
						onClick={toggleIsLiked}
						variant='secondary'
						size='icon-lg'
						className={like.className}
					>
						<like.Icon className='scale-125' />
					</Button>
					<Button
						onClick={toggleIsLiked}
						variant='secondary'
						size='lg'
						className={cn('text-lg', like.className)}
					>
						{like.text({ isShort: false })}
					</Button>
				</div>
			),
		},
		add: {
			mobile: (
				<AddToCartButton
					Icon={add.Icon}
					product={product}
					isAdded={isAlreadyAdded}
					text={add.text({ isShort: true })}
					className={add.className}
				/>
			),
			desktop: (
				<AddToCartButton
					Icon={add.Icon}
					product={product}
					isAdded={isAlreadyAdded}
					text={add.text({ isShort: false })}
					className={add.className}
				/>
			),
		},
	};
};

export default useButtons;
