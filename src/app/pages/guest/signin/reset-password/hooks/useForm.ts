import { useState } from 'react';
import { getRouteApi } from '@tanstack/react-router';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation } from '@customcads/react-sdk';
import * as form from '@/lib/utils/form';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { schema } from '@/app/validators/reset-password';

const Route = getRouteApi('/_guest/reset-password');

export const useForm = () => {
	const { email, token } = Route.useSearch();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { mutateAsync: resetPassword, ...mutation } = useMutation(
		({ identity }) => identity.resetPassword,
	);

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues: { password: '', confirmPassword: '' },
		onSubmit: async ({ value }) => {
			await resetPassword({ email, token, newPassword: value.password });
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	return {
		form: formApi,
		error: form.extractError(mutation.error as unknown),
		handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		isSubmitted,
		isSuccess: mutation.isSuccess,
	};
};
