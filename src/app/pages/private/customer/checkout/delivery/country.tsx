import { useCheckoutFormContext } from '@/app/contexts/checkout';
import FormField from '@/app/components/fields/field';

const CountryField = () => {
	const { form } = useCheckoutFormContext();

	return (
		<div className='grow flex flex-col gap-y-3'>
			<form.Field
				name='country'
				listeners={{
					onChange: () => {
						form.setFieldValue('site', '');
						form.setFieldValue('address', '');
					},
				}}
			>
				{(api) => <FormField api={api} />}
			</form.Field>
		</div>
	);
};

export default CountryField;
