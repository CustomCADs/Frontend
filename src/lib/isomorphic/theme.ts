import { createClientOnlyFn, createIsomorphicFn } from '@tanstack/react-start';
import { getCookie } from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

export const getSystemThemePreference = createClientOnlyFn(() =>
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light',
);

export const getThemeCookie = createIsomorphicFn()
	.client(() => Cookies.get('color-theme') as 'dark' | 'light')
	.server(() => getCookie('color-theme') as 'dark' | 'light');

export const isLightThemeCookie = createIsomorphicFn()
	.client(() => Cookies.get('color-theme') === 'light')
	.server(() => getCookie('color-theme') === 'light');

export const isDarkThemeCookie = createIsomorphicFn()
	.client(() => Cookies.get('color-theme') === 'dark')
	.server(() => getCookie('color-theme') === 'dark');
