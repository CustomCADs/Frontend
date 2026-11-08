import { Link } from '@tanstack/react-router';
import { Children } from '@/types/react';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import DialogCheckout from '@/app/components/payment/dialog-checkout';
import StripeProvider from '@/app/components/payment/stripe-provider';

type Props = { hasDelivery: boolean } & Children;
const CheckoutButton = ({ children, hasDelivery }: Props) => {
	const { authn } = useAuthStore();
	if (!authn) return <Link to='/login'>{children}</Link>;
	if (hasDelivery) return <Link to='/checkout'>{children}</Link>;

	return (
		<StripeProvider>
			<DialogCheckout>{children}</DialogCheckout>
		</StripeProvider>
	);
};

export default CheckoutButton;
