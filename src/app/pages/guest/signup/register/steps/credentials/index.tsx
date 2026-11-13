import FormField from '@/app/components/fields/field';
import { Form } from '../../hooks/useForm';

type Props = { form: Form };
const Credentials = ({ form }: Props) => (
	<div className='md:w-2/3 space-y-6'>
		<div className='grid gap-2'>
			<form.Field name='email'>
				{(api) => <FormField api={api} />}
			</form.Field>
		</div>
		<div className='grid gap-2'>
			<form.Field name='password'>
				{(api) => <FormField api={api} />}
			</form.Field>
		</div>
		<div className='grid gap-2'>
			<form.Field name='confirmPassword'>
				{(api) => <FormField api={api} />}
			</form.Field>
		</div>
	</div>
);

export default Credentials;
