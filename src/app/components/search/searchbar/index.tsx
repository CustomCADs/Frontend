import { useState } from 'react';
import { Search } from 'lucide-react';
import { Children } from '@/types/react';
import { inputGroup } from '@/app/components/ui';

type Props = {
	preview?: (search: string) => Children['children'];
	placeholder: string;
	getSearch: () => string | undefined;
	updateSearch: (searchTerm: string | undefined) => void;
};
const Searchbar = ({
	preview,
	placeholder,
	getSearch,
	updateSearch,
}: Props) => {
	const [search, setSearch] = useState(getSearch());

	return (
		<inputGroup.Root className='relative flex items-center border-2 border-border rounded-xl min-h-11 md:min-h-14 ps-4'>
			<inputGroup.Input
				id='searchbar'
				type='search'
				placeholder={placeholder}
				value={search}
				onChange={({ target }) => setSearch(target.value)}
				onKeyDown={({ key }) => key === 'Enter' && updateSearch(search)}
				className='min-w-50 sm:min-w-60 md:min-w-75 lg:min-w-100 xl:min-w-120 text-ellipsis text-xs md:text-lg'
				autoComplete='off'
			/>
			{preview && search && search !== getSearch() && (
				<div className='left-0 top-12 md:top-15 z-10 absolute w-full'>
					{preview(search)}
				</div>
			)}
			<inputGroup.Addon className='p-0'>
				<Search
					onClick={() => updateSearch(search)}
					className='cursor-pointer size-4 lg:size-5'
				/>
			</inputGroup.Addon>
		</inputGroup.Root>
	);
};

export default Searchbar;
