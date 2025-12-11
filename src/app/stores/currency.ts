import { Store } from '@tanstack/store';
import { Currency } from '@customcads/react-sdk';
import * as persistence from '@/lib/isomorphic/persistence';
import { getEnv } from '@/lib/isomorphic/env';
import { CURRENCY } from '@/app/constants/stores';
import * as money from '@/app/utils/money';

const persist = persistence.create<CurrencyState>(CURRENCY.store, (state) => ({
	data: state.current,
	key: CURRENCY.cookie,
}));
const defaultBrowserCurrency = money.resolveCurrency();

type CurrencyState = {
	current: Currency;
};

const loadInitialState = (): CurrencyState => {
	if (getEnv().isServer) return { current: 'EUR' };

	const persistedState = persistence.get(CURRENCY.store);
	if (persistedState) return JSON.parse(persistedState);

	const state = { current: defaultBrowserCurrency };
	persist(state);
	return state;
};

export const store = new Store<CurrencyState>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

export const resetStore = () =>
	store.setState({ current: defaultBrowserCurrency });

export const setCurrent = (currentCurr: Currency) =>
	store.setState((prev) => ({
		...prev,
		current: currentCurr,
	}));
