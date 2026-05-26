import { cn } from '@/lib/utils';
import { pagination, select } from '@/app/components/ui';

type Props = {
	min: number;
	max: number;
	limit: number;
	onChange: (limit: number) => void;
};
const Limits = ({ min, max, limit, onChange }: Props) => {
	const renderLimits = () => {
		const limits = [];
		for (let i = min; i <= max; i++) {
			limits.push(
				<select.Item
					key={i}
					value={i.toString()}
					className={cn(
						'hover:brightness-80',
						limit === i && 'brightness-60',
					)}
				>
					{i}
				</select.Item>,
			);
		}
		return limits;
	};

	return (
		<pagination.Item className='flex gap-x-4'>
			<select.Root onValueChange={(val) => onChange(Number(val))}>
				<select.Trigger className='text-secondary-foreground text-sm md:text-lg py-1 ps-4 pe-2 rounded-lg'>
					<span className='text-xs'>{limit}</span>
				</select.Trigger>
				<select.Content className='max-h-100'>
					<select.Groupp>{renderLimits()}</select.Groupp>
				</select.Content>
			</select.Root>
		</pagination.Item>
	);
};

export default Limits;
