import { cn } from '@/lib/utils/tailwindcss';
import * as pagination from '@/app/components/ui/pagination';

type Props = {
	current: number;
	last: number;
	onChange: (page: number) => void;
};
const Pages = ({ current, last, onChange }: Props) => {
	const renderPages = () => {
		const pages = [];
		for (let i = 1; i <= last; i++) {
			pages.push(
				<pagination.PaginationItem key={i}>
					<pagination.PaginationLink
						clickable
						onClick={() => onChange(i)}
						className={cn('text-sm md:text-lg')}
						isActive={current === i}
					>
						{i}
					</pagination.PaginationLink>
				</pagination.PaginationItem>,
			);
		}
		return pages;
	};
	const handle = {
		beginning: () => onChange(1),
		previous: () => onChange(current - 1),
		next: () => onChange(current + 1),
		end: () => onChange(last),
	};

	const isFirst = current === 1;
	const isLast = current === last;

	return [
		<pagination.PaginationItem
			key='beginning'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<pagination.PaginationBeginning
				clickable={!isFirst}
				onClick={handle.beginning}
			/>
		</pagination.PaginationItem>,
		<pagination.PaginationItem
			key='previous'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<pagination.PaginationPrevious
				clickable={!isFirst}
				onClick={handle.previous}
			/>
		</pagination.PaginationItem>,
		renderPages(),
		<pagination.PaginationItem
			key='next'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<pagination.PaginationNext
				clickable={!isLast}
				onClick={handle.next}
			/>
		</pagination.PaginationItem>,
		<pagination.PaginationItem
			key='end'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<pagination.PaginationEnd
				clickable={!isLast}
				onClick={handle.end}
			/>
		</pagination.PaginationItem>,
	];
};

export default Pages;
