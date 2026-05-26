import { Store } from '@tanstack/store';
import { Theme } from '@/types/locale';
import { persistence, getSystemThemePreference } from '@/lib/isomorphic';
import { THEME } from '@/app/constants/stores';

const persist = persistence.create<State>(THEME.store);

type State = {
	theme: Theme;
};
const defaultState = (): State => {
	if (persistence.exists(THEME.store))
		return persistence.get<State>(THEME.store)!;

	return persist({ theme: getSystemThemePreference() });
};

export const store = new Store<State>(defaultState());
store.subscribe(({ currentVal }) => persist(currentVal));

export const reset = () => store.setState(defaultState());

export const toggle = () => {
	store.setState((prev) => ({
		theme: prev.theme === 'dark' ? 'light' : 'dark',
	}));
};

export const set = (theme: State['theme']) => {
	store.setState({ theme });
};

export type ThemeStoreState = State;
