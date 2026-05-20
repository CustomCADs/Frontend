import { Children } from '@/types/react';

type Props = Children & { label: string };
const Item = ({ label, children }: Props) => (
	<div className='basis-1/3 flex text-center justify-center items-center gap-x-2 text-sm md:text-base'>
		<span className='font-extrabold'>{label}</span>
		<p className='font-light'>{children}</p>
	</div>
);

export default Item;
