import { useState } from 'react';
import { useMutation } from '@customcads/react-sdk';
import { Children } from '@/types/react';
import { form } from '@/lib/utils';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { useCartUpdates } from '@/app/hooks/features/carts/useCartUpdates';
import { useCheckout } from '@/app/hooks/features/payment/useCheckout';
import Card from '@/app/components/payment/card-element';
import { Error } from '@/app/components/form/error';
import { Button, dialog } from '@/app/components/ui';
import StripeProvider from './stripe-provider';

type Props = Children;
const DialogCheckout = ({ children }: Props) => {
	const stripe = useCheckout();
	const updates = useCartUpdates();

	const { mutateAsync } = useMutation(
		({ activeCarts }) => activeCarts.purchase,
	);
	const { idempotencyKeys } = useIdempotencyKeys(['purcahse'] as const);

	const [card, setCard] = useState<{ complete: boolean; error?: string }>({
		complete: false,
		error: undefined,
	});
	const tCheckout = useCustomerTranslations('checkout');

	const handleSubmit = async () => {
		if (!stripe.isStripeLoaded) return;

		const checkout = await stripe.handleSubmit();
		if (!checkout.success) return;

		await mutateAsync({
			paymentMethodId: checkout.paymentMethodId,
			idempotencyKey: idempotencyKeys.purcahse,
		});
		updates.cart.clear();
	};

	return (
		<StripeProvider>
			<dialog.Root
				onOpenChange={() =>
					setCard({ complete: false, error: undefined })
				}
			>
				<dialog.Trigger>{children}</dialog.Trigger>
				<dialog.Content>
					<form
						onSubmit={(e) => form.handleSubmit(e, handleSubmit)}
						className='flex flex-col py-8'
					>
						<div className='flex flex-col gap-y-6 p-6'>
							<Card
								onChange={(e) =>
									setCard({ ...e, error: e.error?.message })
								}
							/>
						</div>
						<p className='text-center py-2'>
							<Error message={card.error} />
						</p>
						<Button
							type='submit'
							size='lg'
							className='text-xl'
							disabled={!card.complete}
						>
							{tCheckout('submit')}
						</Button>
					</form>
				</dialog.Content>
			</dialog.Root>
		</StripeProvider>
	);
};

export default DialogCheckout;
