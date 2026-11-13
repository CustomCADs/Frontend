import { Children } from '@/types/react';
import { cn } from '@/lib/utils';

type Props = { orientation: 'left' | 'right' } & Children;
const Side = ({ children, orientation }: Props) => (
	<div
		className={cn(
			'bg-secondary border md:border-0 rounded-md md:rounded-none shadow-shadow shadow-xl',
			orientation === 'left'
				? 'rounded-b-xl md:rounded-e-xl'
				: 'rounded-t-xl md:rounded-s-xl',
			orientation === 'left'
				? 'border-b-2 md:border-b-2 md:border-e-2'
				: 'border-t-2 md:border-t-0 md:border-s-2',
		)}
	>
		<div className='h-full flex flex-col justify-between gap-y-20 p-6 md:py-20'>
			{children}
		</div>
	</div>
);

export default Side;
