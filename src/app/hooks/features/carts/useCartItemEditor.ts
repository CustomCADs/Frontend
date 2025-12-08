import { useEffect } from 'react';
import { EditCustomziationRequest } from '@customcads/react-sdk';
import { CartItem } from '@/app/types/cart-item';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useCustomizationCreator } from '@/app/hooks/features/customizations/useCustomizationCreator';
import { useCartUpdates } from './useCartUpdates';

export const useCartItemEditor = (productId: string) => {
	const { items } = useCartStore();
	const itemsLoaded = !!items;

	const item = items?.find((i) => i.productId === productId);
	const updates = useCartUpdates();
	const addItemIfMissing = (customizationId: string) => {
		if (!item) {
			updates.cart.add({
				productId,
				quantity: 1,
				forDelivery: true,
				customizationId: customizationId,
			});
			return;
		}

		return {
			otherwise: (callback: (item: CartItem) => void) => callback(item),
		};
	};

	const { customization, edit: editCustomization } = useCustomizationCreator(
		item,
		itemsLoaded,
	);

	useEffect(() => {
		if (itemsLoaded && customization) addItemIfMissing(customization.id);
	}, [items, customization]);

	return {
		item,
		customization,
		save: (
			customization: EditCustomziationRequest,
			callback?: VoidFunction,
		) => {
			addItemIfMissing(customization.id)?.otherwise((item) => {
				if (!item.forDelivery) {
					updates.item.delivery.on(productId, customization.id);
				}
			});
			editCustomization(customization);

			callback?.();
		},
	};
};
