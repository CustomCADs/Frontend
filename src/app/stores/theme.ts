import { Store } from '@tanstack/store';
import Cookies from 'js-cookie';
import { getEnv } from '@/lib/isomorphic/env';
import { getSystemThemePreference } from '@/lib/isomorphic/theme';

const LOCAL_STORAGE_KEY = 'color-theme';
const COOKIE_STORAGE_KEY = 'color-theme';

type ThemeState = {
	theme: 'light' | 'dark';
};
const defaultState = (): ThemeState => {
	if (getEnv().isServer) return { theme: 'light' };

	const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (persistedState) {
		return JSON.parse(persistedState);
	}

	return { theme: getSystemThemePreference() };
};

export const store = new Store<ThemeState>(defaultState());
store.subscribe(({ currentVal }) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentVal));
	Cookies.set(COOKIE_STORAGE_KEY, currentVal.theme);
});

export const reset = () => store.setState(defaultState());

export const toggle = () => {
	store.setState((prev) => ({
		theme: prev.theme === 'dark' ? 'light' : 'dark',
	}));
};

export const set = (theme: ThemeState['theme']) => {
	store.setState({ theme });
};
