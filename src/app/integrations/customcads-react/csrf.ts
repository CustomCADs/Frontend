import { InternalAxiosRequestConfig } from 'axios';
import { getCsrfCookie } from '@/lib/isomorphic/api';

export const refresh = (cfg?: InternalAxiosRequestConfig) => {
	if (!cfg) throw new Error('No Axios config');
	cfg.headers['Csrf-Token'] = getCsrfCookie();
	return cfg;
};
