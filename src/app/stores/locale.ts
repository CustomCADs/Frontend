import { Store } from '@tanstack/store';
import { AllowedLanguage } from '@/types/locale';
import {
	persistence,
	getUserDefaultLanguage,
	getUserTimeZone,
} from '@/lib/isomorphic';
import { LOCALE } from '@/app/constants/stores';

const persist = persistence.create<State>(LOCALE.store);

type State = {
	defaultLanguage: AllowedLanguage;
	language: AllowedLanguage;
	timezone: string;
};
const defaultState = (): State => ({
	defaultLanguage: getUserDefaultLanguage(),
	language: getUserDefaultLanguage(),
	timezone: getUserTimeZone(),
});

const loadInitialState = (): State => {
	if (persistence.exists(LOCALE.store))
		return persistence.get<State>(LOCALE.store)!;

	return persist(defaultState());
};

export const store = new Store<State>(loadInitialState());
store.subscribe((state) => persist(state));

export const resetStore = () => store.setState(defaultState);

export const setDefaultLanguage = (defaultLanguage: AllowedLanguage) =>
	store.setState((prev) => ({
		...prev,
		defaultLanguage,
	}));

export const setLanguage = (language: AllowedLanguage) =>
	store.setState((prev) => ({
		...prev,
		language,
	}));

export const setTimeZone = (timezone: string) =>
	store.setState((prev) => ({
		...prev,
		timezone,
	}));

export type LanguageStoreState = State;
