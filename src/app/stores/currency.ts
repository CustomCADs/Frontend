import { Store } from '@tanstack/store';
import { Currency } from '@customcads/react-sdk';
import Cookies from 'js-cookie';
import { getEnv } from '@/lib/isomorphic/env';
import * as money from '@/app/utils/money';

const LOCAL_STORAGE_KEY = 'currency-store';
const COOKIE_STORAGE_KEY = 'currency';
const defaultBrowserCurrency = money.resolveCurrency();

type CurrencyState = {
	current: Currency;
};
export const defaultState: CurrencyState = {
	current: defaultBrowserCurrency,
};

const loadInitialState = (): CurrencyState => {
	if (getEnv().isServer) return { current: 'EUR' };

	const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (persistedState) {
		return JSON.parse(persistedState);
	}

	const state = defaultState;
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
	Cookies.set(COOKIE_STORAGE_KEY, state.current);
	return state;
};

export const store = new Store<CurrencyState>(loadInitialState());
store.subscribe(({ currentVal }) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentVal));
	Cookies.set(COOKIE_STORAGE_KEY, currentVal.current);
});

export const resetStore = () => store.setState(defaultState);
export const setCurrent = (currentCurr: Currency) =>
	store.setState((prev) => ({
		...prev,
		current: currentCurr,
	}));
