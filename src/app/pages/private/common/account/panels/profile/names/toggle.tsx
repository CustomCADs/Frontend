import { Edit } from 'lucide-react';
import { Children } from '@/types/react';
import { Button } from '@/app/components/ui/button';

type Props = Children & { onClick: VoidFunction };
const ToggleEdit = ({ children, onClick }: Props) => (
	<div className='max-w-full flex justify-center items-center'>
		<Button type='button' variant='ghost' onClick={onClick}>
			<Edit className='size-5 md:size-6' />
			{children}
		</Button>
	</div>
);

export default ToggleEdit;
