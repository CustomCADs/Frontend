import { HeartMinus, HeartPlus, ListCheck, ListPlus } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { Button } from '@/app/components/ui/button';

const useButtons = ({ id }: { id: string }) => {
	const tProduct = useGalleryTranslations('product');
	const { items } = useCartStore();

	const cartUpdates = useCartUpdates();
	const addToCart = () =>
		cartUpdates.cart.add({ productId: id, forDelivery: false });

	const isAlreadyLiked = false; // TODO: implement Like mechanism
	const like = {
		Icon: isAlreadyLiked ? HeartMinus : HeartPlus,
		text: ({ isShort }: { isShort: boolean }) => {
			if (isAlreadyLiked) {
				return isShort ? tProduct('liked-short') : tProduct('liked');
			}
			return isShort ? tProduct('like-short') : tProduct('like');
		},
		className: 'shadow-shadow shadow-md cursor-pointer',
	};

	const isAlreadyAdded = items?.find((i) => i.productId === id);
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
						variant='secondary'
						size='icon-lg'
						className={like.className}
					>
						<like.Icon />
					</Button>
					<Button
						variant='secondary'
						className={cn('min-h-10 px-6', like.className)}
					>
						{like.text({ isShort: true })}
					</Button>
				</div>
			),
			desktop: (
				<div className='flex items-center gap-x-2'>
					<Button
						variant='secondary'
						size='icon-lg'
						className={like.className}
					>
						<like.Icon className='scale-125' />
					</Button>
					<Button
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
				<div className='flex items-center gap-x-2 cursor-pointer'>
					<Button
						variant='secondary'
						size='icon-lg'
						className={add.className}
						onClick={addToCart}
					>
						<add.Icon />
					</Button>
					<Button
						variant='secondary'
						className={cn('min-h-10 px-6', add.className)}
						onClick={addToCart}
					>
						{add.text({ isShort: true })}
					</Button>
				</div>
			),
			desktop: (
				<div className='flex items-center gap-x-2'>
					<Button
						variant='secondary'
						size='icon-lg'
						className={add.className}
						onClick={addToCart}
					>
						<add.Icon className='scale-125' />
					</Button>
					<Button
						variant='secondary'
						size='lg'
						className={cn('text-lg', add.className)}
						onClick={addToCart}
					>
						{add.text({ isShort: false })}
					</Button>
				</div>
			),
		},
	};
};

export default useButtons;
