import * as axios from 'axios';
import * as customcads from '@customcads/react-sdk';
import { getCsrfCookie } from '@/lib/isomorphic/api';
import * as auth from '@/app/stores/auth';

export const setupApi = (store: ReturnType<typeof auth.store>) => {
	customcads.setBaseUrl(
		`${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_VERSION ?? 'v1'}`,
	);

	const refreshCsrf = (cfg: axios.InternalAxiosRequestConfig) => {
		cfg.headers['Csrf-Token'] = getCsrfCookie();
		return cfg;
	};

	customcads.axios.interceptors.request.use(refreshCsrf);

	customcads.axios.interceptors.response.use(
		(response) => response,
		async (error) => {
			const isAuthError = () =>
				axios.isAxiosError(error) && // must be an Axios error
				error.config?.url !== '/identity/refresh' && // must not be due to lack of refresh token
				[401, 403].includes(error.response?.status ?? -1); // must be 401 (unauthenticated) or 403 (unauthorized)

			if (!isAuthError()) return Promise.reject(error);

			try {
				await customcads.identityApi.refresh();
				const { data: role } = await customcads.identityApi.authz();
				store.login(role);

				const config = refreshCsrf(error.config);
				return await axios.default(config);
			} catch {
				return Promise.reject(error);
			}
		},
	);
};
