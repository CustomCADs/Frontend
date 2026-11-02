import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@customcads/react-sdk';
import { form } from '@/lib/utils';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { useCheckout } from '@/app/hooks/features/payment/useCheckout';
import { useSteps, useStepBlocker } from '@/app/components/form/multi-step';
import { generateSteps } from '@/app/utils/multi-step';
import { schema, Data } from '@/app/validators/checkout';
import { type Key } from '../';

const defaultValues: Data = {
	destination: 'office',
	officeId: 0,
	country: '',
	site: '',
	postcode: '',
	address: '',
	addressNote: '',
	longitude: 0,
	latitude: 0,
	email: '',
	phone: '',
	shipmentService: '',
};

export const useForm = () => {
	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const tCheckout = useCustomerTranslations('checkout');
	const stripe = useCheckout();

	const { mutateAsync } = useMutation(
		({ activeCarts }) => activeCarts.purchaseWithDelivery,
	);
	const { idempotencyKeys } = useIdempotencyKeys(['purcahse'] as const);

	const updates = useCartUpdates();
	const navigate = useNavigate();

	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({
			value: {
				destination,
				email,
				phone,
				shipmentService,
				officeId,
				country,
				site,
				addressNote,
				longitude,
				latitude,
			},
		}) => {
			if (!stripe.isStripeLoaded) return;

			const checkout = await stripe.handleSubmit();
			if (!checkout.success) return;

			await mutateAsync({
				destination,
				officeId,
				address: {
					country,
					site,
					addressNote,
					coordinates: { longitude, latitude },
				},
				contact: { email, phone },
				shipmentService,
				paymentMethodId: checkout.paymentMethodId,
				idempotencyKey: idempotencyKeys.purcahse,
			});

			updates.cart.clear();
			await navigate({ to: '/cart' });
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	const { evaluateFields } = form.doFieldsHaveErrors<Data>(
		(field) => formApi.getAllErrors().fields[field],
	);

	const steps = generateSteps<Key, keyof Data>(
		{
			delivery: {
				label: tCheckout('delivery-title'),
				fields: ['country', 'email', 'phone'],
			},
			address: {
				label: tCheckout('address-title'),
				fields: ['site', 'address', 'shipmentService'],
			},
			payment: {
				label: tCheckout('payment-title'),
				fields: [],
			},
		},
		evaluateFields,
	);
	const { current, move } = useSteps({ steps });

	const canMoveNext = useStepBlocker(
		formApi.store,
		steps,
		current,
		evaluateFields,
	);

	return {
		form: formApi,
		current,
		move: { ...move, canMoveNext },
		handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) =>
			form.handleSubmit(e, formApi.handleSubmit),
		steps,
	};
};
