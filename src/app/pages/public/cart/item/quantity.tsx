import { Minus, Plus } from 'lucide-react';
import { ClassName } from '@/types/react';
import { cn } from '@/lib/utils';
import { Button } from '@/app/components/ui';

type Props = {
	value: number;
	increment: VoidFunction;
	decrement: VoidFunction;
} & ClassName;
const Quantity = ({ className, value, increment, decrement }: Props) => (
	<div className={cn('flex justify-stretch items-center gap-x-2', className)}>
		<Button
			variant='secondary'
			size='icon-sm'
			onClick={decrement}
			className='grow'
		>
			<Minus />
		</Button>
		<span className='md:text-base'>{value}</span>
		<Button
			variant='secondary'
			size='icon-sm'
			onClick={increment}
			className='grow'
		>
			<Plus />
		</Button>
	</div>
);

export default Quantity;
