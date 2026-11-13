import { cn } from '@/lib/utils';
import * as page from '@/app/utils/page';
import StripeProvider from '@/app/components/payment/stripe-provider';
import CheckoutForm from './form';

export type Key = 'delivery' | 'address' | 'payment';

const Checkout = () => (
	<div className={cn(page.className, 'flex-row gap-x-10')}>
		<StripeProvider>
			<CheckoutForm />
		</StripeProvider>
	</div>
);

export default Checkout;
