import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import CustomIcon from '@/app/components/icon';
import { Button } from '@/app/components/ui/button';

const CartIndicator = ({ text }: { text?: string }) => {
	const { is } = useAuthStore();
	const { items } = useCartStore();

	if (!is.guest && !is.customer) return;

	return (
		<div className='relative'>
			<CustomIcon Icon={ShoppingCart} to='/cart' text={text} />
			{items?.length ? (
				<Button
					size='icon-sm'
					className='bg-white text-black absolute -translate-y-4 left-4 w-4 h-4 rounded-full'
				>
					{items.length}
				</Button>
			) : null}
		</div>
	);
};

export default CartIndicator;
