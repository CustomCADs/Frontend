import { Trash } from 'lucide-react';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Button, Checkbox } from '@/app/components/ui';
import { Children } from '@/types/react';

type Props = {
	forDelivery?: boolean;
	isPrintable?: boolean;
	onRemoveClick: VoidFunction;
	onDeliveryChange: VoidFunction;
} & Children;
const Buttons = ({
	children,
	forDelivery,
	isPrintable,
	onDeliveryChange,
	onRemoveClick,
}: Props) => {
	const tCart = useGalleryTranslations('cart');

	const ui = {
		remove: (
			<Button
				variant='destructive'
				onClick={onRemoveClick}
				className='md:self-stretch md:min-w-22'
			>
				<Trash />
			</Button>
		),
		delivery: isPrintable ? (
			<Button
				tag='span'
				size='sm'
				variant='destructive'
				onClick={onDeliveryChange}
				className='md:self-stretch'
			>
				<span className='text-xs'>{tCart('delivery')}:</span>
				<Checkbox checked={forDelivery} />
			</Button>
		) : (
			<Button
				tag='span'
				variant='secondary'
				className='cursor-auto md:self-stretch grow text-secondary-foreground rounded-md py-2 px-2 md:px-4'
			>
				<div className='md:max-w-24 flex items-center gap-x-2'>
					<span className='text-sm text-center text-wrap opacity-60 font-bold select-none'>
						{tCart('undeliverable')}
					</span>
				</div>
			</Button>
		),
	};

	return (
		<div className='h-full flex md:flex-col justify-between items-center gap-y-2'>
			{ui.delivery}
			{children}
			{ui.remove}
		</div>
	);
};

export default Buttons;
