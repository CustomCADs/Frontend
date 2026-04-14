import { Store } from '@tanstack/store';
import * as persistence from '@/lib/isomorphic/persistence';
import { AllowedLanguage } from '@/types/locale';
import * as locale from '@/lib/isomorphic/locale';
import { LOCALE } from '@/app/constants/stores';

const persist = persistence.create<State>(LOCALE.store);

type State = {
	defaultLanguage: AllowedLanguage;
	language: AllowedLanguage;
	timezone: string;
};
const defaultState = (): State => ({
	defaultLanguage: locale.getUserDefaultLanguage(),
	language: locale.getUserDefaultLanguage(),
	timezone: locale.getUserTimeZone(),
});

const loadInitialState = (): State => {
	if (persistence.exists(LOCALE.store))
		return persistence.get<State>(LOCALE.store)!;

	return persist(defaultState());
};

export const store = new Store<State>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

export const resetStore = () => store.setState(defaultState());

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
