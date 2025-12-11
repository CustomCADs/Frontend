import { Children } from '@/types/react';
import { Button } from '@/app/components/ui/button';

type Props = { onClick?: VoidFunction } & Children;
const GeneralButton = ({ children, onClick }: Props) => (
	<Button
		size='lg'
		className='cursor-pointer hover:opacity-70 text-base font-bold'
		onClick={onClick}
	>
		{children}
	</Button>
);

export default GeneralButton;
