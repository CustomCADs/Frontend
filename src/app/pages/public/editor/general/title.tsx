import { Children } from '@/types/react';

type Props = { level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } & Children;
const GeneralTitle = ({ level: Level = 'h2', children }: Props) => (
	<Level className='text-2xl font-extrabold'>{children}</Level>
);

export default GeneralTitle;
