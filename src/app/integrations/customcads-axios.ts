import * as customcads from '@customcads/react-sdk';
import { persistence, getEnv, getCsrfCookie } from '@/lib/isomorphic';
import { isAxiosError } from 'axios';

export const setupApi = () => {
	const BASE_URL = `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_VERSION ?? 'v1'}`;
	customcads.setBaseUrl(BASE_URL);

	customcads.axios.interceptors.request.use((cfg) => {
		cfg.headers['Csrf-Token'] = getCsrfCookie();
		if (getEnv().isClient) return cfg;

		cfg.headers['User-Agent'] = persistence.getHeader('user-agent');
		if (cfg.headers.has('cookie')) return cfg;

		cfg.headers['cookie'] = persistence.getAll();
		return cfg;
	});

	customcads.axios.interceptors.response.use(
		(res) => {
			if (getEnv().isServer) {
				res.config = {
					...res.config,
					transformRequest: undefined,
					transformResponse: undefined,
					validateStatus: undefined,
					env: undefined,
				};
				res.request = { ...res.request, signal: undefined };
			}
			return res;
		},
		async (error) => {
			const isAuthError =
				isAxiosError(error) && // must be an Axios error
				error.config?.url !== '/identity/refresh' && // must not be due to lack of refresh token
				[401, 403].includes(error.response?.status ?? -1); // must be 401 (unauthenticated) or 403 (unauthorized)

			if (!isAuthError || !error.config) {
				return Promise.reject(error);
			}
			const { config } = error;

			try {
				await customcads.identityApi.refresh().then(({ headers }) => {
					if (getEnv().isClient) return;

					const [cookie] = headers['set-cookie']!;
					const [jwt] = cookie.split(';');

					config.headers['cookie'] =
						`${config.headers['cookie']}; ${jwt}`;
				});

				return await customcads.axios(config);
			} catch {
				return Promise.reject(error);
			}
		},
	);
};
