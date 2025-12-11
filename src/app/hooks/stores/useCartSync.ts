import { useEffect } from 'react';
import { type ActiveCartItem, useQuery } from '@customcads/react-sdk';
import { getCartCookie } from '@/lib/isomorphic/cart';
import { CartItem } from '@/app/types/cart-item';
import * as cartStore from '@/app/stores/cart';
import { useAuthStore } from './useAuthStore';
import { useCartStore } from './useCartStore';

const mapItems = (items: ActiveCartItem[]) =>
	items.map<CartItem>(
		({ forDelivery, productId, quantity, customizationId }) => {
			if (!forDelivery) return { forDelivery, productId };

			return {
				forDelivery,
				productId,
				quantity,
				customizationId: customizationId!,
			};
		},
	);

const cookieSync = (
	items: CartItem[] | null,
	fill: (items: CartItem[]) => void,
) => {
	const cookie = getCartCookie();
	if (cookie !== null && items?.length !== cookie.length) fill(cookie);
};

export const useCartSync = () => {
	const { is } = useAuthStore();
	const { items, actions } = useCartStore();

	cookieSync(items, actions.cart.fill);
	const activeCart = useQuery(({ activeCarts }) => activeCarts.all, false);

	useEffect(() => {
		if (is.guest) {
			cartStore.persist({ items });
		}
	}, [items]);

	useEffect(() => {
		if (is.customer) {
			const initCart = async () => {
				const { data: items } = await activeCart.refetch();

				if (items) {
					actions.cart.fill(mapItems(items));
				}
			};
			initCart();
		}
	}, [is.customer, activeCart.isFetched]);
};
