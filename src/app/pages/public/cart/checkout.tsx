import { Link } from '@tanstack/react-router';
import { Children } from '@/types/react';
import DialogCheckout from '@/app/components/payment/dialog-checkout';

type Props = { hasDelivery: boolean } & Children;
const CheckoutButton = ({ children, hasDelivery }: Props) => {
	if (hasDelivery) return <Link to='/checkout'>{children}</Link>;

	return <DialogCheckout>{children}</DialogCheckout>;
};

export default CheckoutButton;
