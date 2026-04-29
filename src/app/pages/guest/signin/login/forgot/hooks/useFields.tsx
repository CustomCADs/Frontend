import FormField from '@/app/components/fields/field';
import { useForm } from './useForm';

export const useFields = () => {
	const { form, isSubmitted, ...rest } = useForm();

	const fields = {
		Email: () => (
			<form.Field name='email'>
				{(api) => <FormField api={api} isSubmitted={isSubmitted} />}
			</form.Field>
		),
	};

	return { fields, ...rest };
};
