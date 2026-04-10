import { createIsomorphicFn } from '@tanstack/react-start';
import { THEME } from '@/app/constants/stores';
import { ThemeStoreState } from '@/app/stores/theme';
import { get } from './persistence';
import { Theme } from '@/types/locale';

const getThemeCookie = () => get<ThemeStoreState>(THEME.store);

export const isLightThemeCookie = () => getThemeCookie()?.theme === 'light';
export const isDarkThemeCookie = () => getThemeCookie()?.theme === 'dark';

export const getSystemThemePreference = createIsomorphicFn()
	.client<[], Theme>(() =>
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light',
	)
	.server<Theme>(() => getThemeCookie()?.theme ?? 'dark'); // fallback in SSR mode
