import FormField from '@/app/components/fields/field';
import { Data } from '@/app/validators/profile';
import { useForm } from './useForm';

export const useFields = (defaultData: Data, canEdit: boolean) => {
	const { form, isSubmitted, ...rest } = useForm(defaultData);

	const fields = {
		Username: () => (
			<form.Field name='username'>
				{(api) => (
					<FormField
						api={api}
						isSubmitted={isSubmitted}
						canEdit={canEdit}
					/>
				)}
			</form.Field>
		),
		FirstName: () => (
			<form.Field name='firstName'>
				{(api) => (
					<FormField
						api={api}
						isSubmitted={isSubmitted}
						canEdit={canEdit}
					/>
				)}
			</form.Field>
		),
		LastName: () => (
			<form.Field name='lastName'>
				{(api) => (
					<FormField
						api={api}
						isSubmitted={isSubmitted}
						canEdit={canEdit}
					/>
				)}
			</form.Field>
		),
	};

	return { fields, ...rest, reset: form.reset };
};
