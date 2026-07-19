import { useDropdowns } from './hooks/useDropdowns';

const Bars = () => {
	const dropdowns = useDropdowns();

	return [
		<div
			key='mobile'
			className='md:hidden flex flex-col justify-center gap-y-8'
		>
			<div className='flex gap-x-4'>
				<dropdowns.Categories />
				<dropdowns.Sortings />
			</div>
			<dropdowns.Searchbar />
		</div>,
		<div
			key='desktop'
			className='hidden md:flex md:justify-center md:w-full md:gap-x-8'
		>
			<dropdowns.Categories />
			<dropdowns.Searchbar />
			<dropdowns.Sortings />
		</div>,
	];
};

export default Bars;
