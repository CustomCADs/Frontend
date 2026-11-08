import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { PaymentRequest } from '@customcads/react-sdk';

export type PaymentStatus = 'awaiting' | 'processing' | 'success' | 'error';

export const useCheckout = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [status, setStatus] = useState<PaymentStatus>('awaiting');
	const [errorMessage, setErrorMessage] = useState<string>();

	const handleSubmit = async (): Promise<
		{ success: false } | { success: true; paymentMethodId: string }
	> => {
		if (!elements || !stripe) return { success: false };

		setStatus('processing');
		const card = elements.getElement(CardElement);
		if (!card) return { success: false };

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: card,
		});

		if (error) {
			setStatus('error');
			setErrorMessage(error.message);
			return { success: false };
		}

		setStatus('success');
		return { success: true, paymentMethodId: paymentMethod.id };
	};

	return {
		isStripeLoaded: !!stripe,
		status,
		error: errorMessage,
		handleSubmit,
	};
};

export type PaymentCallback = (req: PaymentRequest) => void;
