import { useCheckoutFormContext } from '@/app/contexts/checkout';
import FormField from '@/app/components/fields/field';

const ContactFields = () => {
	const { form } = useCheckoutFormContext();

	return (
		<>
			<div className='basis-1/2 flex flex-col gap-y-3'>
				<form.Field name='email'>
					{(api) => <FormField api={api} optional />}
				</form.Field>
			</div>
			<div className='basis-1/2 flex flex-col gap-y-3'>
				<form.Field name='phone'>
					{(api) => <FormField api={api} optional />}
				</form.Field>
			</div>
		</>
	);
};

export default ContactFields;
