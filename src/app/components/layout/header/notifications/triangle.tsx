const d = 'M-50 100 Q40 80 50 0 Q60 80 150 100';

const Triangle = () => (
	<div className='absolute -top-8 right-14 w-20 h-8 text-accent'>
		<svg
			viewBox='0 0 100 100'
			className='w-full h-full'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d={d} fill='currentColor' />
			<path d={d} fill='none' stroke='white' strokeWidth='2' />
		</svg>
	</div>
);

export default Triangle;
