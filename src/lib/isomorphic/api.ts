import { createIsomorphicFn } from '@tanstack/react-start';
import { getCookie } from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

export const getCsrfCookie = createIsomorphicFn()
	.client(() => Cookies.get('csrf'))
	.server(() => getCookie('csrf'));
