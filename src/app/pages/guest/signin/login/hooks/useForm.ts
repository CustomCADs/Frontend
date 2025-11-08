import { useNavigate } from '@tanstack/react-router';
import { useForm as useTanStackForm } from '@tanstack/react-form';
import { useMutation, useQuery } from '@customcads/react-sdk';
import * as form from '@/lib/utils/form';
import { useNotificationQueryData } from '@/app/hooks/features/notifications/useNotificationQueryData';
import { useFormTranslations } from '@/app/hooks/locales/translations/components';
import { useForceLocaleRefresh } from '@/app/hooks/locales/useForceLocaleRefresh';
import { schema } from '@/app/validators/login';
import * as authStore from '@/app/stores/auth';

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

	const tErrors = useFormTranslations('errors');
	const tLabels = useFormTranslations('labels');

	const formApi = useTanStackForm({
		defaultValues,
		onSubmit: async ({ value }) => {
			await login(value);
			const { data: role } = await authz();
			if (role) {
				authStore.login(role);
			}
			notifications.invalidate();
		},
		validators: {
			onChange: schema({ tErrors, tLabels }),
		},
	});
	useForceLocaleRefresh(() => formApi.validate('change'));

	const navigate = useNavigate();

	return {
		form: formApi,
		error: form.extractError(error as unknown),
		handleSubmit: (e: React.FormEvent<HTMLFormElement>) =>
			form.handleSubmit(e, async () => {
				await formApi.handleSubmit();
				navigate({ to: '/' });
			}),
	};
};
