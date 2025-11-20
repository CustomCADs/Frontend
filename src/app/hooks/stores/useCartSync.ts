import { useEffect } from 'react';
import { type ActiveCartItem, useQuery } from '@customcads/react-sdk';
import { CartItem } from '@/app/types/cart-item';
import { useAuthStore } from './useAuthStore';
import { useCartStore } from './useCartStore';
import { persistLocally } from '@/app/stores/cart';

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

export const useCartSync = () => {
	const { items, actions } = useCartStore();
	const { is } = useAuthStore();

	const activeCart = useQuery(({ activeCarts }) => activeCarts.all, false);

	useEffect(() => {
		if (is.guest) {
			persistLocally({ items });
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
