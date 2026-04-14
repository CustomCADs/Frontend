import axios, { AxiosResponse, AxiosError, isAxiosError } from 'axios';
import * as csrf from './csrf';

export const onFulfilled = (response: AxiosResponse) => response;

const isAuthError = (error: AxiosError) =>
	isAxiosError(error) && // must be an Axios error
	error.config?.url !== '/identity/refresh' && // must not be due to lack of refresh token
	[401, 403].includes(error.response?.status ?? -1); // must be 401 (unauthenticated) or 403 (unauthorized)

export const onRejected = async (
	error: AxiosError,
	onAuthError: () => Promise<void>,
) => {
	if (!isAuthError(error)) return Promise.reject(error);

	try {
		await onAuthError();

		const config = csrf.refresh(error.config);
		return await axios(config);
	} catch {
		return Promise.reject(error);
	}
};
