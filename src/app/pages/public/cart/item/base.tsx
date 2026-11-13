import { useNavigate } from '@tanstack/react-router';
import {
	CustomizationResponse,
	GallerySingleProductResponse,
} from '@customcads/react-sdk';
import { CartItemForDelivery } from '@/app/types/cart-item';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Button } from '@/app/components/ui';
import { is } from '@/app/utils/product-tags';
import { useItemMoney } from './hooks/useItemMoney';
import Money from '../money';
import Header from './header';
import Buttons from './buttons';
import Quantity from './quantity';

type BaseProps = {
	product: GallerySingleProductResponse;
	money: ReturnType<typeof useItemMoney>;
	onUpdate: { remove: VoidFunction };
};
type DeliveryProps = {
	forDelivery: true;
	item: CartItemForDelivery;
	customization: CustomizationResponse;
	onUpdate: {
		noDelivery: VoidFunction;
		increment: VoidFunction;
		decrement: VoidFunction;
	};
};
type Props = BaseProps & ({ forDelivery?: false } | DeliveryProps);
const BaseItem = ({ product, money, ...props }: Props) => {
	const tCart = useGalleryTranslations('cart');
	const updates = useCartUpdates();

	const remove = () => {
		props.onUpdate.remove();
		updates.cart.remove(product.id);
	};

	const setNoDelivery = () => {
		props.forDelivery && props.onUpdate.noDelivery();
		updates.item.delivery.off(product.id);
	};

	const quantity = {
		increment: () => {
			if (!props.forDelivery) return;
			props.onUpdate.increment();
			updates.item.quantity.increment(product.id);
		},
		decrement: () => {
			if (!props.forDelivery || props.item.quantity === 1) return;
			props.onUpdate.decrement();
			updates.item.quantity.decrement(product.id);
		},
	};
	const navigate = useNavigate();
	const navigateToEditor = () =>
		navigate({ to: '/editor/$id', params: { id: product.id } });

	return (
		<div className='relative grid grid-cols-3 items-stretch gap-x-2 md:gap-x-12 border-2 p-3 rounded-md'>
			<div className='col-span-1'>
				<Header product={product} />
			</div>
			<div className='md:col-span-1 col-span-2 flex justify-center md:justify-start items-center py-4'>
				<Money
					money={money}
					className='text-xs md:text-base italic text-nowrap'
				/>
			</div>
			<div className='col-span-6 md:min-w-1/4 h-full md:absolute right-3 bottom-0 pt-4 md:pb-4'>
				{props.forDelivery ? (
					<Buttons
						onDeliveryChange={setNoDelivery}
						onRemoveClick={remove}
						forDelivery={props.forDelivery}
						isPrintable
					>
						<Button
							size='sm'
							tag='span'
							variant='secondary'
							onClick={navigateToEditor}
							className='md:self-stretch px-4'
						>
							<span className='text-xs'>{tCart('printing')}</span>
						</Button>
						<Quantity
							value={props.item.quantity}
							increment={quantity.increment}
							decrement={quantity.decrement}
							className='md:self-stretch'
						/>
					</Buttons>
				) : (
					<Buttons
						onDeliveryChange={navigateToEditor}
						onRemoveClick={remove}
						isPrintable={is(product.tags).printable}
					/>
				)}
			</div>
		</div>
	);
};

export default BaseItem;
