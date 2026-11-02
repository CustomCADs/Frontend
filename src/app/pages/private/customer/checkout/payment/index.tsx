import Card from '@/app/components/payment/card-element';

type Props = React.ComponentProps<typeof Card>;
export const Payment = ({ onChange }: Props) => (
	<div className='flex flex-col gap-y-6 p-6'>
		<Card onChange={onChange} />
	</div>
);

export default Payment;
