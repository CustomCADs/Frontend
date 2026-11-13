import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import { radioGroup } from '@/app/components/ui';
import RadioField from '@/app/components/fields/radio';
import FormField from '@/app/components/fields/field';

const DestinationField = () => {
	const { form } = useCheckoutFormContext();
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<div className='grow flex flex-col gap-y-3'>
			<form.Field name='destination'>
				{(api) => (
					<FormField api={api}>
						<radioGroup.Root
							id={api.name}
							name={api.name}
							value={api.state.value}
							onValueChange={(value) =>
								api.handleChange(value as 'address' | 'office')
							}
						>
							<div className='flex gap-x-6'>
								<RadioField
									value='office'
									label={tCheckout('to-office')}
								/>
								<RadioField
									value='address'
									label={tCheckout('to-address')}
								/>
							</div>
						</radioGroup.Root>
					</FormField>
				)}
			</form.Field>
		</div>
	);
};

export default DestinationField;
