import { cn } from '@/lib/utils/tailwindcss';
import * as pagination from '@/app/components/ui/pagination';
import * as select from '@/app/components/ui/select';

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
				<select.SelectItem
					key={i}
					value={i.toString()}
					className={cn(
						'hover:brightness-80',
						limit === i && 'brightness-60',
					)}
				>
					{i}
				</select.SelectItem>,
			);
		}
		return limits;
	};

	return (
		<pagination.PaginationItem className='flex gap-x-4'>
			<select.Select onValueChange={(val) => onChange(Number(val))}>
				<select.SelectTrigger className='text-secondary-foreground text-sm md:text-lg py-1 ps-4 pe-2 rounded-lg'>
					<span className='text-xs'>{limit}</span>
				</select.SelectTrigger>
				<select.SelectContent className='max-h-100'>
					<select.SelectGroup>{renderLimits()}</select.SelectGroup>
				</select.SelectContent>
			</select.Select>
		</pagination.PaginationItem>
	);
};

export default Limits;
