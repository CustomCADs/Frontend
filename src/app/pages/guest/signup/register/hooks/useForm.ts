import { useState } from 'react';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { form } from '@/lib/utils';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { schema, Data } from '@/app/validators/register';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { type Key } from '..';
import { useMutation } from '@customcads/react-sdk';
import { generateSteps } from '@/app/utils/multi-step';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';

const defaultValues: Data = {
	role: 'Customer',
	firstName: undefined,
	lastName: undefined,
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const useForm = () => {
	const { mutateAsync: register, ...mutation } = useMutation(
		({ identity }) => identity.register,
	);

	const [isSubmitted, setIsSubmitted] = useState(false);
	const tRegister = useSignupTranslations('register');

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			await register(value);
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	const { evaluateFields } = form.doFieldsHaveErrors<Data>(
		(field) => formApi.getAllErrors().fields[field],
		(field) =>
			formApi.setFieldMeta(field, (field) => ({
				...field,
				isBlurred: true,
				isTouched: true,
			})),
	);

	return {
		form: formApi,
		handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		error: form.extractError(mutation.error as unknown),
		isSuccess: mutation.isSuccess,
		isSubmitted,
		steps: generateSteps<Key, keyof Data>(
			{
				role: {
					label: tRegister('role-title'),
					fields: ['role'],
				},
				profile: {
					label: tRegister('profile-title'),
					fields: ['firstName', 'lastName', 'username'],
				},
				creds: {
					label: tRegister('creds-title'),
					fields: ['email', 'password', 'confirmPassword'],
				},
			},
			evaluateFields,
		),
	};
};

export type Form = ReturnType<typeof useForm>['form'];
