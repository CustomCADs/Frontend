import { RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';

type Props = { value: string; label?: string };
const RadioField = ({ value, label }: Props) => (
	<div className='flex items-center gap-x-2'>
		<RadioGroupItem id={value} value={value} className='w-4 h-4' />
		<Label htmlFor={value} className='text-base'>
			{label}
		</Label>
	</div>
);

export default RadioField;
