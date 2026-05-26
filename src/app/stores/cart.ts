import { Store } from '@tanstack/store';
import { persistence } from '@/lib/isomorphic';
import { auth } from '@/lib/utils';
import { CartItem } from '@/app/types/cart-item';
import { CART } from '@/app/constants/stores';

export const persist = persistence.create<State>(CART.store);

type State = {
	items: CartItem[] | null;
};
const defaultState = (): State => {
	if (!auth.is().guest) return { items: null };

	if (persistence.exists(CART.store))
		return persistence.get<State>(CART.store)!;

	return persist({ items: [] });
};

export const store = new Store(defaultState());
store.subscribe(({ currentVal }) => persist(currentVal));

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
								if (item.productId === id && !item.forDelivery)
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

export type CartStoreState = State;
