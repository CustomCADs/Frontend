import { createClientOnlyFn } from '@tanstack/react-start';
import { Theme } from '@/types/locale';
import { THEME } from '@/app/constants/stores';
import { getCookie } from './persistence';

export const getSystemThemePreference = createClientOnlyFn(() =>
	window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light',
);

export const getThemeCookie = () => getCookie(THEME.cookie) as Theme;
export const isLightThemeCookie = () => getThemeCookie() === 'light';
export const isDarkThemeCookie = () => getThemeCookie() === 'dark';
