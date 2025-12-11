import { Children } from '@/types/react';

type Props = { title: string } & Children;
const RadioUi = ({ children, title }: Props) => (
	<div className='flex items-center gap-x-4'>
		<label className='text-lg text-center font-bold'>{title}:</label>
		{children}
	</div>
);

export default RadioUi;
