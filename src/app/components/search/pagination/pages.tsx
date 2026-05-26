import { cn, pagination } from '@/lib/utils';
import { pagination as ui } from '@/app/components/ui';

type Props = {
	current: number;
	last: number;
	onChange: (page: number) => void;
};
const Pages = ({ current, last, onChange }: Props) => {
	const renderPages = () => {
		const pages = [];

		const { start, end } = pagination.computeRange(current, last);
		for (let i = start; i <= end; i++) {
			pages.push(
				<ui.Item key={i}>
					<ui.Link
						clickable
						onClick={() => onChange(i)}
						className={cn('text-sm md:text-lg size-7 md:size-9')}
						isActive={current === i}
					>
						{i}
					</ui.Link>
				</ui.Item>,
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
		<ui.Item
			key='beginning'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<ui.Beginning clickable={!isFirst} onClick={handle.beginning} />
		</ui.Item>,
		<ui.Item
			key='previous'
			className={cn(isFirst && 'opacity-50 hover:opacity-50')}
		>
			<ui.Previous clickable={!isFirst} onClick={handle.previous} />
		</ui.Item>,
		renderPages(),
		<ui.Item
			key='next'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<ui.Next clickable={!isLast} onClick={handle.next} />
		</ui.Item>,
		<ui.Item
			key='end'
			className={cn(isLast && 'opacity-50 hover:opacity-50')}
		>
			<ui.End clickable={!isLast} onClick={handle.end} />
		</ui.Item>,
	];
};

export default Pages;
