import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as popover from '@/app/components/ui/popover';
import { Button } from '@/app/components/ui/button';
import * as productTags from '@/app/utils/product-tags';
import ProductButton from './button';

type Props = {
	Icon: LucideIcon;
	product: { id: string; is: ReturnType<typeof productTags.is> };
	text: string;
	isAdded: boolean;
	className?: string;
};
const AddToCartButton = ({
	Icon,
	product,
	text,
	isAdded,
	className,
}: Props) => {
	const navigate = useNavigate();
	const updates = useCartUpdates();

	const tProduct = useGalleryTranslations('product');
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = (open: boolean) => setIsOpen(isAdded ? false : open);
	const handleAdd = {
		noDelivery: () => {
			updates.cart.add({
				productId: product.id,
				forDelivery: false,
			});
			setIsOpen(false);
		},
		forDelivery: () => {
			navigate({ to: '/editor/$id', params: { id: product.id } });
			setIsOpen(false);
		},
	};

	if (!product.is.printable)
		return (
			<ProductButton
				Icon={Icon}
				text={text}
				className={className}
				onClick={handleAdd.noDelivery}
			/>
		);

	return (
		<popover.Popover open={isOpen} onOpenChange={toggleIsOpen}>
			<popover.PopoverTrigger>
				<ProductButton Icon={Icon} text={text} className={className} />
			</popover.PopoverTrigger>
			<popover.PopoverContent>
				<aside className='flex flex-col gap-y-6 py-4 md:py-8'>
					<h4 className='text-center font-bold'>
						{tProduct('add_delivery-question')}
					</h4>
					<div className='flex flex-col md:flex-row justify-between gap-y-2 px-2 md:px-8'>
						<Button
							variant='destructive'
							onClick={handleAdd.noDelivery}
						>
							{tProduct('add_no-delivery')}
						</Button>
						<Button
							variant='destructive'
							onClick={handleAdd.forDelivery}
						>
							{tProduct('add_for-delivery')}
						</Button>
					</div>
				</aside>
			</popover.PopoverContent>
		</popover.Popover>
	);
};

export default AddToCartButton;
