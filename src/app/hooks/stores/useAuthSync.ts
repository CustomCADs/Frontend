import { useEffect } from 'react';
import { useQuery, useMutation } from '@customcads/react-sdk';
import * as authStore from '@/app/stores/auth';
import { useAuthStore } from './useAuthStore';

export const useAuthSync = () => {
	const state = useAuthStore();
	const { mutateAsync: refreshAuth } = useMutation(
		({ identity }) => identity.refresh,
	);

	const { refetch: refetchAuthn } = useQuery(
		({ identity }) => identity.authn,
		false,
	);
	const { refetch: refetchAuthz } = useQuery(
		({ identity }) => identity.authz,
		false,
	);

	useEffect(() => {
		const sync = async () => {
			const { data: authn } = await refetchAuthn();
			if (!authn) {
				try {
					await refreshAuth();
				} catch {
					authStore.logout();
					return;
				}
			}

			const { data: authz } = await refetchAuthz();
			if (authz) {
				authStore.login(authz);
			}
		};
		sync();
	}, [state.authn, state.authz]);

	return state;
};
