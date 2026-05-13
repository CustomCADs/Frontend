import FormField from '@/app/components/fields/field';
import FormInput from '@/app/components/fields/input';
import { useForm } from './useForm';

export const useFields = () => {
	const { form, isSubmitted, ...rest } = useForm();
	const fields = {
		Username: () => (
			<form.Field name='username'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		),
		Password: () => (
			<form.Field name='password'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		),
		RememberMe: () => (
			<form.Field name='rememberMe'>
				{(api) => (
					<FormField
						api={api}
						isSubmitted={isSubmitted}
						className='order-2'
					>
						<FormInput
							api={api}
							type='checkbox'
							onChange={({ target: { checked } }) =>
								api.handleChange(checked)
							}
							className='w-1/10'
						/>
					</FormField>
				)}
			</form.Field>
		),
	};

	return { fields, ...rest };
};
