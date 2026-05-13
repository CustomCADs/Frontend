import { Children } from '@/types/react';
import { cn } from '@/lib/utils/tailwindcss';
import { ScrollArea, ScrollBar } from '@/app/components/ui/scroll-area';

type Props = Children & {
	title: string;
	items?: React.ReactNode;
	className?: string;
};
const Scroller = ({ title, items, className, children }: Props) => (
	<div className='flex flex-col gap-y-4 py-8 md:py-16'>
		<p className='text-xl md:text-2xl text-center font-extrabold'>
			{title}
		</p>
		<div className='relative bg-background border-2 rounded-lg p-4 pb-12'>
			<ScrollArea className={cn('h-70 md:h-80', className)}>
				<ScrollBar orientation='vertical' />
				<ScrollBar orientation='horizontal' />
				{items}
			</ScrollArea>
			<div
				className={cn(
					'absolute bottom-5 left-1/2 -translate-x-1/2',
					'flex justify-center items-center gap-x-2',
					'min-w-3/4 md:min-w-full',
				)}
			>
				{children}
			</div>
		</div>
	</div>
);

export default Scroller;
