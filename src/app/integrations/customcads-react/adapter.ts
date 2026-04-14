import * as axios from 'axios';
import * as customcads from '@customcads/react-sdk';

const serializeData = (data: unknown) => {
	if (!data) return;
	if (data instanceof FormData || typeof data === 'string') return data;
	return JSON.stringify(data);
};

const mapHeaders = (config: axios.InternalAxiosRequestConfig) => {
	const headers: Record<string, string> = {};

	for (const [key, value] of Object.entries(config.headers)) {
		if (value !== undefined && value !== null) {
			headers[key] = String(value);
		}
	}

	return headers;
};

const mapToFetch = (config: axios.InternalAxiosRequestConfig): RequestInit => ({
	method: config.method?.toUpperCase() ?? 'GET',
	body: serializeData(config.data),
	headers: mapHeaders(config),
	signal: config.signal as AbortSignal,
});

const setupConfig = ({ headers }: axios.InternalAxiosRequestConfig) => {
	headers.delete('Content-Type');
};

export const setupFetchAdapter = (axios: axios.Axios) => {
	axios.defaults.adapter = async (config) => {
		setupConfig(config);

		const response = await fetch(
			customcads.axios.getUri(config),
			mapToFetch(config),
		);

		const settled: axios.AxiosResponse = {
			data: await response.json(),
			status: response.status,
			statusText: response.statusText,
			headers: Object.fromEntries(response.headers.entries()),
			config: {
				url: config.url,
				method: config.method,
				baseURL: config.baseURL,
				headers: config.headers,
			},
		};

		if (response.ok) return settled;
		// eslint-disable-next-line no-throw-literal
		throw { response: settled, config: settled.config, isAxiosError: true };
	};
};
