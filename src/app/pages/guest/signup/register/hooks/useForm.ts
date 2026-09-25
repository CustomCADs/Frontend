import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation } from '@customcads/react-sdk';
import { FormFor } from '@/types/form';
import { form } from '@/lib/utils';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import { useStepBlocker, useSteps } from '@/app/components/form/multi-step';
import { schema, Data } from '@/app/validators/register';
import { generateSteps } from '@/app/utils/multi-step';
import { type Key } from '..';

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

	const steps = generateSteps<Key, keyof Data>(
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
	);
	const { current, move } = useSteps({ steps });

	const canMoveNext = useStepBlocker(
		formApi.store,
		steps,
		current,
		evaluateFields,
	);

	return {
		form: formApi,
		handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) =>
			form.handleSubmit(e, formApi.handleSubmit),
		current,
		move: { ...move, canMoveNext },
		error: form.extractError(mutation.error as unknown),
		isSuccess: mutation.isSuccess,
		steps,
	};
};

export type Form = FormFor<Data>;
