import { NominatimStatus } from '@/app/hooks/features/nominatim/useNominatimMutation';
import { PaymentStatus } from '@/app/hooks/features/payment/useCheckout';
import { Checkout } from '@/app/locales/types/pages/private/customer';

export const PAYMENT_BTN: Record<PaymentStatus, keyof Checkout> = {
	awaiting: 'submit',
	error: 'payment-failed',
	processing: 'payment-processing',
	success: 'payment-success',
};

export const SEARCH_BTN: Record<NominatimStatus | 'pending', keyof Checkout> = {
	pending: 'find',
	loading: 'searching',
	success: 'found',
	failure: 'not-found',
};
