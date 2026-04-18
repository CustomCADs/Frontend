import { useEffect } from 'react';
import { useMutation } from '@customcads/react-sdk';
import { extractError } from '@/lib/utils/form';

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

	return {
		isSuccess: mutation.isSuccess,
		error: extractError(mutation.error),
	};
};
