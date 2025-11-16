import { Store } from '@tanstack/store';
import Cookies from 'js-cookie';
import { AllowedLanguage } from '@/types/locale';
import { getEnv } from '@/lib/isomorphic/env';
import { getUserDefaultLanguage } from '@/lib/isomorphic/language';

const LOCAL_STORAGE_KEY = 'language-store';
const COOKIE_STORAGE_KEY = 'language';

type LanguageState = {
	default: AllowedLanguage;
	current: AllowedLanguage;
};
const defaultState = () => ({
	default: getUserDefaultLanguage(),
	current: getUserDefaultLanguage(),
});

const loadInitialState = (): LanguageState => {
	if (getEnv().isServer)
		return {
			default: 'en-GB',
			current: 'en-GB',
		};

	const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (persistedState) {
		return JSON.parse(persistedState);
	}

	const state = defaultState();
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
	Cookies.set(COOKIE_STORAGE_KEY, state.current);

	return state;
};

export const store = new Store<LanguageState>(loadInitialState());
store.subscribe(({ currentVal: state }) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
	Cookies.set(COOKIE_STORAGE_KEY, state.current);
});

export const resetStore = () => store.setState(defaultState());

export const setDefault = (defaultLang: AllowedLanguage) =>
	store.setState((prev) => ({
		...prev,
		default: defaultLang,
	}));

export const setCurrent = (currentLang: AllowedLanguage) =>
	store.setState((prev) => ({
		...prev,
		current: currentLang,
	}));
