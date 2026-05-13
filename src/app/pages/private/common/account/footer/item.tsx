import { Children } from '@/types/react';

type Props = Children & { label: string };
const Item = ({ label, children }: Props) => (
	<div className='basis-1/3 text-sm md:text-base flex flex-wrap justify-center items-center gap-x-2'>
		<span className='font-extrabold'>{label}</span>
		<span className='md:underline underline-offset-5'>{children}</span>
	</div>
);

export default Item;
