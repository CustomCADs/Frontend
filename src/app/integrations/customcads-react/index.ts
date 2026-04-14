import * as customcads from '@customcads/react-sdk';
import { store } from '@/app/stores/auth';
import { setupFetchAdapter } from './adapter';
import * as csrf from './csrf';
import * as auth from './auth';

export const setupApi = (authStore: ReturnType<typeof store>) => {
	const BASE_URL = `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_VERSION ?? 'v1'}`;
	customcads.setBaseUrl(BASE_URL);

	if (typeof XMLHttpRequest === 'undefined') {
		setupFetchAdapter(customcads.axios);
	}

	customcads.axios.interceptors.request.use(csrf.refresh);

	customcads.axios.interceptors.response.use(auth.onFulfilled, (error) =>
		auth.onRejected(error, async () => {
			await customcads.identityApi.refresh();
			const { data: role } = await customcads.identityApi.authz();
			authStore.login(role);
		}),
	);
};
