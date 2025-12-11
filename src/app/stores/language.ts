import { Store } from '@tanstack/store';
import * as persistence from '@/lib/isomorphic/persistence';
import { AllowedLanguage } from '@/types/locale';
import { getEnv } from '@/lib/isomorphic/env';
import { getUserDefaultLanguage } from '@/lib/isomorphic/language';
import { LANGUAGE } from '@/app/constants/stores';

const persist = persistence.create<LanguageState>(LANGUAGE.store, (state) => ({
	data: state.current,
	key: LANGUAGE.cookie,
}));

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

	const persistedState = persistence.get(LANGUAGE.store);
	if (persistedState) return JSON.parse(persistedState);

	const state = defaultState();
	persist(state);
	return state;
};

export const store = new Store<LanguageState>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

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
