import { Store } from '@tanstack/store';
import { Currency } from '@customcads/react-sdk';
import { persistence } from '@/lib/isomorphic';
import { CURRENCY } from '@/app/constants/stores';
import * as money from '@/app/utils/money';

const persist = persistence.create<State>(CURRENCY.store);
const defaultBrowserCurrency = money.resolveCurrency();

type State = {
	current: Currency;
};

const loadInitialState = (): State => {
	if (persistence.exists(CURRENCY.store))
		return persistence.get<State>(CURRENCY.store)!;

	return persist({ current: defaultBrowserCurrency });
};

export const store = new Store<State>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

export const resetStore = () =>
	store.setState({ current: defaultBrowserCurrency });

export const setCurrent = (currentCurr: Currency) =>
	store.setState((prev) => ({
		...prev,
		current: currentCurr,
	}));
