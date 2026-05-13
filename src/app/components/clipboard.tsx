import { useState } from 'react';
import { ClipboardPen } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';

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
		<Tooltip>
			<TooltipTrigger className='relative flex flex-col items-center'>
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
			</TooltipTrigger>
			<TooltipContent>{tUi('clipboard-label')}</TooltipContent>
		</Tooltip>
	);
};

export default Clipboard;
