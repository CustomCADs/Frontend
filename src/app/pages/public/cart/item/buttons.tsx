import { Trash } from 'lucide-react';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Button } from '@/app/components/ui/button';
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
				variant='secondary'
				onClick={onDeliveryChange}
				className='px-2 md:px-4'
			>
				<div className='max-w-32 flex items-center gap-x-2'>
					<span className='text-xs'>{tCart('delivery')}:</span>
					<Checkbox checked={forDelivery} onChange={() => {}} />
				</div>
			</Button>
		) : (
			<button className='bg-secondary/60 text-secondary-foreground rounded-md py-2 px-2 md:px-4'>
				<div className='max-w-20 flex items-center gap-x-2'>
					<span className='text-xs text-wrap opacity-60 font-bold'>
						{tCart('undeliverable')}
					</span>
				</div>
			</button>
		),
	};

	return (
		<div className='h-full flex items-center justify-between gap-y-1.5'>
			<div className='h-full w-full flex md:flex-col justify-between items-center gap-x-2 gap-y-2'>
				{ui.delivery}
				{children}
				{ui.remove}
			</div>
		</div>
	);
};

export default Buttons;
