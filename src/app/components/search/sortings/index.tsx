import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import SortingsCombobox from './compobox';

export type SortingDirection = 'ascending' | 'descending';
type Props = {
	getSorting: () => { type?: string; direction?: string };
	updateSorting: (sorting: { type?: string; direction?: string }) => void;
	sortings?: string[];
};

const Sortings = ({ getSorting, updateSorting, sortings }: Props) => {
	const { type: sortingParam, direction: directionParam } = getSorting();
	const initial = 'Sort By';

	const [sorting, setSorting] = useState<string>(sortingParam ?? initial);
	const [direction, setDirection] = useState<SortingDirection>(
		directionParam ? (directionParam as SortingDirection) : 'descending',
	);

	useEffect(() => {
		if (!sortingParam) {
			setSorting(initial);
		}
	}, [initial, sortingParam]);

	const toggleDirection = () => {
		if (sorting !== initial) {
			setDirection((prev) => {
				const set = (direction: SortingDirection) => {
					updateSorting({ direction: direction });
					return direction;
				};
				switch (prev) {
					case 'ascending':
						return set('descending');
					case 'descending':
					default:
						return set('ascending');
				}
			});
		}
	};

	if (!sortings) return;

	const handleSelect = (name?: string) => {
		setSorting(() => name ?? initial);
		updateSorting({ type: name, direction });
	};
	const format = (sorting: string) =>
		sorting.replace(/([a-z])([A-Z])/g, '$1 $2');

	const DirectionArrow = direction === 'ascending' ? ArrowUp : ArrowDown;

	return (
		<div className='flex items-center gap-x-2'>
			<ArrowUpDown />
			<SortingsCombobox
				current={sorting}
				options={sortings.map((x) => ({ value: x, label: format(x) }))}
				onSelect={handleSelect}
			>
				<span className='flex justify-between items-center gap-x-2 px-8 py-3 bg-secondary text-popover-foreground text-xs md:text-lg border-2 border-border rounded-2xl cursor-pointer select-none hover:brightness-80 transition duration-200'>
					{format(sorting)}
				</span>
			</SortingsCombobox>
			{sorting !== initial && (
				<DirectionArrow
					onClick={toggleDirection}
					className='cursor-pointer'
				/>
			)}
		</div>
	);
};

export default Sortings;
