import FormField from '@/app/components/fields/field';
import { useForm } from './useForm';

export const useFields = () => {
	const { form, isSubmitted, ...rest } = useForm();

	const fields = {
		Password: () => (
			<form.Field name='password'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		),
		ConfirmPassword: () => (
			<form.Field name='confirmPassword'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		),
	};

	return { fields, ...rest };
};
