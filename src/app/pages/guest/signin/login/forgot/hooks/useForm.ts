import { useState } from 'react';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation } from '@customcads/react-sdk';
import { form } from '@/lib/utils';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { schema } from '@/app/validators/forgot-password';

export const useForm = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { mutateAsync: sendEmail, ...mutation } = useMutation(
		({ identity }) => identity.forgotPassword,
	);

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues: { email: '' },
		onSubmit: async ({ value }) => {
			await sendEmail({ email: value.email });
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	return {
		form: formApi,
		error: form.extractError(mutation.error as unknown),
		handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		isSuccess: mutation.isSuccess,
		isSubmitted,
	};
};
