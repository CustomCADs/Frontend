import { StripeCardElementChangeEvent } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { isDarkThemeCookie } from '@/lib/isomorphic';

type Props = { onChange?: (e: StripeCardElementChangeEvent) => void };
const Card = ({ onChange }: Props) => (
	<CardElement
		onChange={onChange}
		options={{
			style: {
				base: {
					color: isDarkThemeCookie() ? '#fafafa' : '#09090b',
					fontWeight: '600',
					fontSize: '16px',
				},
				invalid: { color: '#e7000b', iconColor: '#e7000b' },
				complete: { color: '#43963c', iconColor: '#43963c' },
			},
			hidePostalCode: true,
		}}
		className='bg-input/20 border-2 border-input p-4 rounded-lg'
	/>
);

export default Card;
