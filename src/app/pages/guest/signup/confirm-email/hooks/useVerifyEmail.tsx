import { useEffect } from 'react';
import { useMutation } from '@customcads/react-sdk';
import { extractError } from '@/lib/utils/form';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useNotificationQueryData } from '@/app/hooks/features/notifications/useNotificationQueryData';

type Props = { username: string; token: string };
export const useVerifyEmail = ({ username, token }: Props) => {
	const { mutateAsync: confirmEmail, ...mutation } = useMutation(
		({ identity }) => identity.confirmEmail,
	);

	useEffect(() => {
		if (username && token) {
			confirmEmail({ username, token });
		}
	}, [token, username]);

	const { reset: resetAuth } = useAuthStore();
	const { invalidate: resetNotifications } = useNotificationQueryData({
		params: { all: { limit: 10 } },
	});

	useEffect(() => {
		resetAuth();
		resetNotifications();
	}, [mutation.isSuccess]);

	return {
		isSuccess: mutation.isSuccess,
		error: extractError(mutation.error),
	};
};
