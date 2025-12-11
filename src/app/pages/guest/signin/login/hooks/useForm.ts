import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation, useQuery } from '@customcads/react-sdk';
import { AppError } from '@/types/errors';
import * as form from '@/lib/utils/form';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useNotificationQueryData } from '@/app/hooks/features/notifications/useNotificationQueryData';
import { useCartTransfer } from '@/app/hooks/features/carts/useCartTransfer';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { schema } from '@/app/validators/login';

type Fields = {
	username: string;
	password: string;
	rememberMe: boolean;
};
const defaultValues: Fields = {
	username: '',
	password: '',
	rememberMe: false,
};

export const useForm = () => {
	const { mutateAsync: login, error } = useMutation(
		({ identity }) => identity.login,
	);
	const { refetch: authz } = useQuery(
		({ identity }) => identity.authz,
		false,
	);

	const notifications = useNotificationQueryData({
		params: { all: { limit: 10 } },
	});
	useCartTransfer();

	const navigate = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const authStore = useAuthStore();
	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			await login(value);
			const { data: role } = await authz();
			if (!role)
				throw new AppError({
					title: 'Login Error',
					message: 'An error occured during the Login process',
					tip: 'Reload this page and try logging in again.',
				});

			authStore.login(role);
			notifications.invalidate();
			navigate({ to: '/' });
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	return {
		form: formApi,
		error: form.extractError(error as unknown),
		handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		isSubmitted,
	};
};
