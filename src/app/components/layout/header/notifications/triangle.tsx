const d = 'M-150 100 Q00 80 50 0 Q100 80 250 100';

const Triangle = () => (
	<div className='absolute -top-8 right-5 md:right-20 w-20 h-8 text-accent'>
		<svg
			viewBox='0 -20 100 100'
			className='w-full h-full'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d={d} fill='currentColor' />
			<path d={d} fill='none' stroke='var(--primary)' strokeWidth='1.5' />
		</svg>
	</div>
);

export default Triangle;
