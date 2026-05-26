import { Children } from '@/types/react';
import { cn } from '@/lib/utils';

type Props = { orientation: 'left' | 'right' } & Children;
const Side = ({ children, orientation }: Props) => (
	<div
		className={cn(
			// base
			'bg-secondary border md:border-0 rounded-md md:rounded-none shadow-shadow shadow-xl',

			// radius
			orientation === 'left' && 'rounded-b-xl md:rounded-e-xl',
			orientation === 'right' && 'rounded-t-xl md:rounded-s-xl',

			// border
			orientation === 'left' && 'border-b-2 md:border-b-2 md:border-e-2',
			orientation === 'right' && 'border-t-2 md:border-t-0 md:border-s-2',
		)}
	>
		<div className='h-full flex flex-col justify-center gap-y-20 py-6 px-4'>
			{children}
		</div>
	</div>
);

export default Side;
