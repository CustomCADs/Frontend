import { cn } from '@/lib/utils/tailwindcss';
import * as paginationUI from '@/app/components/ui/pagination';
import * as paginationUtils from '@/lib/utils/pagination';

type Props = {
	current: number;
	last: number;
	onChange: (page: number) => void;
};
const Pages = ({ current, last, onChange }: Props) => {
	const renderPages = () => {
		const pages = [];

		const { start, end } = paginationUtils.computeRange(current, last);
		for (let i = start; i <= end; i++) {
			pages.push(
				<paginationUI.PaginationItem key={i}>
					<paginationUI.PaginationLink
						clickable
						onClick={() => onChange(i)}
						className={cn('text-sm md:text-lg size-7 md:size-9')}
						isActive={current === i}
					>
						{i}
					</paginationUI.PaginationLink>
				</paginationUI.PaginationItem>,
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
		<paginationUI.PaginationItem
			key='beginning'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<paginationUI.PaginationBeginning
				clickable={!isFirst}
				onClick={handle.beginning}
			/>
		</paginationUI.PaginationItem>,
		<paginationUI.PaginationItem
			key='previous'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<paginationUI.PaginationPrevious
				clickable={!isFirst}
				onClick={handle.previous}
			/>
		</paginationUI.PaginationItem>,
		renderPages(),
		<paginationUI.PaginationItem
			key='next'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<paginationUI.PaginationNext
				clickable={!isLast}
				onClick={handle.next}
			/>
		</paginationUI.PaginationItem>,
		<paginationUI.PaginationItem
			key='end'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<paginationUI.PaginationEnd
				clickable={!isLast}
				onClick={handle.end}
			/>
		</paginationUI.PaginationItem>,
	];
};

export default Pages;
