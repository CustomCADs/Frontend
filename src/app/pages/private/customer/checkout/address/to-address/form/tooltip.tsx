import { cn } from '@/lib/utils';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button, tooltip } from '@/app/components/ui';
import { useStreetNumbersMismatch } from '../hooks/useStreetNumbersMismatch';

const Tooltip = () => {
	const { isMismatch, override } = useStreetNumbersMismatch();
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<article
			className={cn(
				'flex justify-between gap-x-4',
				'transition-all transition-discrete duration-500',
				!isMismatch && 'opacity-0 invisible',
			)}
		>
			<div className='grow grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1'>
				<tooltip.Root>
					<tooltip.Trigger className='relative flex flex-col items-center'>
						{tCheckout('no-address')}
					</tooltip.Trigger>
					<tooltip.Content>
						{tCheckout('no-address-tooltip')}
					</tooltip.Content>
				</tooltip.Root>
			</div>
			<Button
				variant='ghost'
				className='text-sm text-muted-foreground h-full select-none'
				onClick={() => override(false)}
			>
				[{tCheckout('hide')}]
			</Button>
		</article>
	);
};

export default Tooltip;
