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

	const handleSelect = (name?: string) => {
		setSorting(() => name ?? initial);
		updateSorting({ type: name, direction });
	};
	if (!sortings) return;

	const DirectionArrow = direction === 'ascending' ? ArrowUp : ArrowDown;

	return (
		<div className='flex items-center gap-x-2'>
			<ArrowUpDown />
			<SortingsCombobox
				current={sorting}
				options={sortings.map((x) => ({
					value: x,
					label: x,
				}))}
				onSelect={handleSelect}
			>
				<span className='flex justify-between items-center gap-x-2 px-8 py-3 bg-secondary text-popover-foreground text-xs md:text-lg border-2 border-border rounded-2xl cursor-pointer hover:brightness-80 transition duration-200'>
					{sorting}
				</span>
			</SortingsCombobox>
			{sorting !== initial && (
				<DirectionArrow onClick={toggleDirection} />
			)}
		</div>
	);
};

export default Sortings;
