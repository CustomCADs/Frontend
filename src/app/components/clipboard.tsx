import { useState } from 'react';
import { ClipboardPen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { Button, tooltip } from './ui';

type Props = { value: string };
const Clipboard = ({ value }: Props) => {
	const tUi = useLayoutTranslations('ui');
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		await navigator.clipboard.writeText(value);

		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<tooltip.Root>
			<tooltip.Trigger className='relative flex flex-col items-center'>
				<Button
					type='button'
					variant='ghost'
					onClick={handleCopy}
					size='icon-sm'
					tag='div'
					className={
						isCopied
							? 'bg-primary text-primary-foreground'
							: 'border'
					}
				>
					<ClipboardPen className='hover:opacity-70' />
				</Button>
				<span
					className={cn(
						'mt-4 absolute top-5',
						'text-sm text-muted-foreground',
						'animate-fade-in duration-350',
						!isCopied && 'hidden',
					)}
				>
					{tUi('clipboard-message')}
				</span>
			</tooltip.Trigger>
			<tooltip.Content>{tUi('clipboard-label')}</tooltip.Content>
		</tooltip.Root>
	);
};

export default Clipboard;
