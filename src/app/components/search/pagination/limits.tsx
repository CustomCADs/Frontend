import { cn } from '@/lib/utils/tailwindcss';
import * as pagination from '@/app/components/ui/pagination';
import * as select from '@/app/components/ui/select';
import * as LIMITS from '@/app/constants/limits';

type Props = {
	limit: number;
	onChange: (limit: number) => void;
};
const Limits = ({ limit, onChange }: Props) => {
	const renderLimits = () => {
		const limits = [];
		for (let i = LIMITS.GALLERY.min; i <= LIMITS.GALLERY.max; i++) {
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
		<pagination.PaginationItem className='flex gap-x-4 me-4'>
			<select.Select onValueChange={(val) => onChange(Number(val))}>
				<select.SelectTrigger className='text-secondary-foreground text-sm md:text-lg py-1 px-8 rounded-lg'>
					<select.SelectValue placeholder={limit} />
				</select.SelectTrigger>
				<select.SelectContent className='max-h-100'>
					<select.SelectGroup>{renderLimits()}</select.SelectGroup>
				</select.SelectContent>
			</select.Select>
		</pagination.PaginationItem>
	);
};

export default Limits;
