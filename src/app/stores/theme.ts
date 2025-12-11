import { Store } from '@tanstack/store';
import { Theme } from '@/types/locale';
import * as persistence from '@/lib/isomorphic/persistence';
import { getEnv } from '@/lib/isomorphic/env';
import { getSystemThemePreference } from '@/lib/isomorphic/theme';
import { THEME } from '@/app/constants/stores';

const persist = persistence.create<ThemeState>(THEME.store, (state) => ({
	data: state.theme,
	key: THEME.cookie,
}));

type ThemeState = {
	theme: Theme;
};
const defaultState = (): ThemeState => {
	if (getEnv().isServer) return { theme: 'dark' };

	const persistedState = persistence.get(THEME.store);
	if (persistedState) return JSON.parse(persistedState);

	const state: ThemeState = { theme: getSystemThemePreference() };
	persist(state);
	return state;
};

export const store = new Store<ThemeState>(defaultState());
store.subscribe(({ currentVal }) => persist(currentVal));

export const reset = () => store.setState(defaultState());

export const toggle = () => {
	store.setState((prev) => ({
		theme: prev.theme === 'dark' ? 'light' : 'dark',
	}));
};

export const set = (theme: ThemeState['theme']) => {
	store.setState({ theme });
};
