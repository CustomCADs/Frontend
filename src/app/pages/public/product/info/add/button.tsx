import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import { Button } from '@/app/components/ui/button';

type Props = {
	Icon: LucideIcon;
	text: string;
	className?: string;
	onClick?: VoidFunction;
};
const ProductButton = ({ Icon, text, className, onClick }: Props) => (
	<div className='flex items-center gap-x-2 cursor-pointer'>
		<Button
			tag='span'
			variant='secondary'
			size='icon-lg'
			className={className}
			onClick={onClick}
		>
			<Icon className='lg:scale-125' />
		</Button>
		<Button
			tag='span'
			variant='secondary'
			className={cn('min-h-10 px-6 lg:text-lg', className)}
			onClick={onClick}
		>
			{text}
		</Button>
	</div>
);

export default ProductButton;
