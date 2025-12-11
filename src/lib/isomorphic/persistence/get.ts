import { createIsomorphicFn } from '@tanstack/react-start';
import * as server from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

export const get = createIsomorphicFn()
	.client((key: string, from?: 'local' | 'cookies') =>
		from === 'cookies' ? Cookies.get(key) : localStorage.getItem(key),
	)
	.server((key: string, from?: 'local' | 'cookies') =>
		from === 'cookies' ? server.getCookie(key) : null,
	);

export const getLocal = (key: string) => get(key, 'local');
export const getCookie = (key: string) => get(key, 'cookies');
