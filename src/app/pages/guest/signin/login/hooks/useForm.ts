import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation } from '@customcads/react-sdk';
import { form } from '@/lib/utils';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useNotificationQueryData } from '@/app/hooks/features/notifications/useNotificationQueryData';
import { useCartTransfer } from '@/app/hooks/features/carts/useCartTransfer';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { schema, Data } from '@/app/validators/login';

const defaultValues: Data = {
	username: '',
	password: '',
	rememberMe: false,
};

export const useForm = () => {
	const { mutateAsync: login, error } = useMutation(
		({ identity }) => identity.login,
	);
	useCartTransfer();

	const { invalidate: resetNotifications } = useNotificationQueryData({
		params: { all: { page: 1, limit: 10 } },
	});
	const { reset: resetAuth } = useAuthStore();

	const navigate = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			await login(value);

			resetAuth();
			resetNotifications();

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
		handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => {
			setIsSubmitted(true);
			return form.handleSubmit(e, formApi.handleSubmit);
		},
		isSubmitted,
	};
};
