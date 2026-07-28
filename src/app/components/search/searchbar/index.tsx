import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/app/components/ui';

type Props = {
	placeholder: string;
	getSearch: () => string | undefined;
	updateSearch: (searchTerm: string | undefined) => void;
};

const Searchbar = ({ placeholder, getSearch, updateSearch }: Props) => {
	const [search, setSearch] = useState(getSearch());

	return (
		<div className='flex items-center gap-x-3'>
			{search && (
				<X
					onClick={() => {
						setSearch(undefined);
						updateSearch(undefined);
					}}
					className='cursor-pointer'
				/>
			)}
			<Input
				id='searchbar'
				type='search'
				placeholder={placeholder}
				value={search}
				onChange={({ target }) => setSearch(target.value)}
				onBlur={() => updateSearch(search)}
				onKeyDown={({ key }) => key === 'Enter' && updateSearch(search)}
				className='bg-secondary border-2 rounded-xl min-h-11 md:min-h-14 min-w-50 sm:min-w-60 md:min-w-75 lg:min-w-100 xl:min-w-120 md:px-6 text-ellipsis text-xs md:text-lg'
				autoComplete='off'
			/>
			<Search
				onClick={() => updateSearch(search)}
				className='cursor-pointer'
			/>
		</div>
	);
};

export default Searchbar;
