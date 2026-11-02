import { mapStepMetadata } from '@/lib/utils/tooling/form';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { card } from '@/app/components/ui';
import MultiStepForm from '@/app/components/form/multi-step';
import { CheckoutFormContextProvider } from '@/app/contexts/checkout';
import { useForm } from './hooks/useForm';
import Step from './step';
import { Key } from '.';

const CheckoutForm = () => {
	const { steps, current, move, handleSubmit, form } = useForm();
	const tCheckout = useCustomerTranslations('checkout');

	const { title, description } = mapStepMetadata<Key>(
		['delivery', 'address', 'payment'],
		tCheckout,
	)[current.key];

	return (
		<CheckoutFormContextProvider initial={{ form }}>
			<card.Root className='w-full max-w-3xl space-y-4'>
				<card.Header className='text-center'>
					<card.Title className='italic text-xl'>{title}!</card.Title>
					<card.Description>{description}</card.Description>
				</card.Header>
				<card.Content className='max-w-3xl h-100'>
					<MultiStepForm
						steps={{ all: steps, current }}
						move={move}
						canMoveNext={move.canMoveNext}
						text={{
							back: tCheckout('back'),
							next: tCheckout('next'),
							submit: tCheckout('submit'),
						}}
						onSubmit={handleSubmit}
					>
						<Step step={current.key} />
					</MultiStepForm>
				</card.Content>
			</card.Root>
		</CheckoutFormContextProvider>
	);
};

export default CheckoutForm;
