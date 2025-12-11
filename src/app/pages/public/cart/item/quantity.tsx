import { Minus, Plus } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

type Props = {
	value: number;
	increment: VoidFunction;
	decrement: VoidFunction;
};
const Quantity = ({ value, increment, decrement }: Props) => (
	<div className='flex items-center gap-x-2'>
		<Button variant='secondary' size='icon-sm' onClick={decrement}>
			<Minus />
		</Button>
		<span className='md:text-lg'>{value}</span>
		<Button variant='secondary' size='icon-sm' onClick={increment}>
			<Plus />
		</Button>
	</div>
);

export default Quantity;
