import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Children } from '@/types/react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

type Props = Children;
const StripeProvider = ({ children }: Props) => (
	<Elements stripe={stripePromise}>{children}</Elements>
);

export default StripeProvider;
