import { Children } from '@/types/react';
import { Button } from '@/app/components/ui/button';

type Props = { onClick?: VoidFunction; disabled?: boolean } & Children;
const GeneralButton = ({ children, disabled, onClick }: Props) => (
	<Button
		size='lg'
		className='cursor-pointer hover:opacity-70 text-base font-bold'
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</Button>
);

export default GeneralButton;
