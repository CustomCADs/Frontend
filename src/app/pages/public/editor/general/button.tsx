import { Button } from '@/app/components/ui';

type Props = Pick<
	React.ComponentProps<typeof Button>,
	'onClick' | 'disabled' | 'children' | 'variant'
>;
const GeneralButton = (props: Props) => (
	<Button
		size='lg'
		className='hover:opacity-70 text-base font-bold'
		{...props}
	/>
);

export default GeneralButton;
