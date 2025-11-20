import { Store } from '@tanstack/store';
import Cookies from 'js-cookie';
import { getEnv } from '@/lib/isomorphic/env';
import { getRoleCookie } from '@/lib/isomorphic/api';
import { is } from '@/lib/utils/auth';
import { CartItem } from '@/app/types/cart-item';

const { customer: isCustomer } = is({
	authn: !!getRoleCookie(),
	authz: getRoleCookie() ?? null,
});

const LOCAL_STORAGE_KEY = 'cart-store';
const COOKIE_STORAGE_KEY = 'cart';

export const persistLocally = (state: CartState) => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
	Cookies.set(COOKIE_STORAGE_KEY, JSON.stringify(state.items));
};

type CartState = {
	items: CartItem[] | null;
};
const defaultState = (): CartState => {
	if (getEnv().isServer) return { items: null };
	if (isCustomer) return { items: null };

	const persistedState = localStorage.getItem(LOCAL_STORAGE_KEY);
	if (persistedState) {
		return JSON.parse(persistedState);
	}

	const state = { items: [] };
	persistLocally(state);
	return state;
};

export const store = new Store(defaultState());
store.subscribe(({ currentVal }) => persistLocally(currentVal));

export const actions = {
	cart: {
		fill: (items: CartItem[]) => store.setState({ items }),
		clear: () => store.setState({ items: [] }),
		add: (newItem: CartItem) =>
			store.setState((prev) => {
				if (!prev.items) return { items: [newItem] };

				return prev.items.find(
					(item) => item.productId === newItem.productId,
				)
					? prev
					: { items: [...prev.items, newItem] };
			}),
		remove: (id: string) =>
			store.setState((prev) => {
				if (!prev.items) return prev;

				return {
					items: prev.items.filter((item) => item.productId !== id),
				};
			}),
	},
	item: {
		quantity: {
			increment: (id: string) =>
				store.setState((prev) => {
					if (!prev.items) return prev;

					return {
						items: prev.items.map((item) =>
							item.productId === id && item.forDelivery
								? { ...item, quantity: item.quantity + 1 }
								: item,
						),
					};
				}),
			decrement: (id: string) =>
				store.setState((prev) => {
					if (!prev.items) return prev;

					return {
						items: prev.items.map((item) =>
							item.productId === id &&
							item.forDelivery &&
							item.quantity > 1
								? { ...item, quantity: item.quantity - 1 }
								: item,
						),
					};
				}),
		},
		delivery: {
			on: (id: string, customizationId: string) =>
				store.setState((prev) => {
					if (!prev.items) return prev;

					if (prev.items.find((item) => item.productId === id)) {
						return {
							items: prev.items.map((item) => {
								if (item.productId === id && item.forDelivery)
									return {
										...item,
										forDelivery: true,
										quantity: 1,
										customizationId,
									};

								return item;
							}),
						};
					}

					return prev;
				}),
			off: (id: string) =>
				store.setState((prev) => {
					if (!prev.items) return prev;

					if (prev.items.find((item) => item.productId === id)) {
						return {
							items: prev.items.map((item) => {
								if (item.productId === id && item.forDelivery)
									return {
										...item,
										forDelivery: false,
										customizationId: null,
									};

								return item;
							}),
						};
					}

					return prev;
				}),
		},
		weight: {
			set: (id: string, weight: number) =>
				store.setState((prev) => {
					if (!prev.items) return prev;

					if (prev.items.find((item) => item.productId === id)) {
						return {
							items: prev.items.map((item) =>
								item.productId === id && item.forDelivery
									? { ...item, weight: weight }
									: item,
							),
						};
					}

					return prev;
				}),
		},
	},
};
