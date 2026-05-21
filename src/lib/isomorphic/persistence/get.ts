import { createIsomorphicFn, createServerOnlyFn } from '@tanstack/react-start';
import * as server from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

const getCookie = createIsomorphicFn()
	.client((key: string) => Cookies.get(key))
	.server((key: string) => server.getCookie(key));

const parseCookie = <TState>(cookie: string | null): TState | null => {
	try {
		return JSON.parse(cookie ?? 'null');
	} catch {
		return JSON.parse(JSON.stringify(cookie ?? null));
	}
};

export const exists = (key: string) => getCookie(key) !== undefined;
export const get = <TState = string>(key: string) =>
	parseCookie<TState>(getCookie(key) ?? null);

export const getHeader = createServerOnlyFn(server.getRequestHeader);

export const getAll = createIsomorphicFn()
	.client(() => document.cookie)
	.server(() => server.getRequestHeader('cookie') ?? '');
