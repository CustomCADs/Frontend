import { Store } from '@tanstack/store';
import * as persistence from '@/lib/isomorphic/persistence';
import { AllowedLanguage } from '@/types/locale';
import { getUserDefaultLanguage } from '@/lib/isomorphic/language';
import { LANGUAGE } from '@/app/constants/stores';

const persist = persistence.create<State>(LANGUAGE.store);

type State = {
	default: AllowedLanguage;
	current: AllowedLanguage;
};
const defaultState = () => ({
	default: getUserDefaultLanguage(),
	current: getUserDefaultLanguage(),
});

const loadInitialState = (): State => {
	if (persistence.exists(LANGUAGE.store))
		return persistence.get<State>(LANGUAGE.store)!;

	return persist(defaultState());
};

export const store = new Store<State>(loadInitialState());
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

export type LanguageStoreState = State;
