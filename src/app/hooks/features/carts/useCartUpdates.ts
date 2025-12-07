import { useMutation } from '@customcads/react-sdk';
import { CartItem } from '@/app/types/cart-item';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useCartStore } from '@/app/hooks/stores/useCartStore';

export const useCartUpdates = () => {
	const { is } = useAuthStore();
	const { idempotencyKeys } = useIdempotencyKeys(['add']);

	const { actions } = useCartStore();
	const { mutateAsync: addCartItem } = useMutation(
		({ activeCarts }) => activeCarts.addItem,
	);
	const { mutateAsync: removeCartItem } = useMutation(
		({ activeCarts }) => activeCarts.removeItem,
	);
	const { mutateAsync: increaseCartItemQuantity } = useMutation(
		({ activeCarts }) => activeCarts.increaseItemQuantity,
	);
	const { mutateAsync: decreaseCartItemQuantity } = useMutation(
		({ activeCarts }) => activeCarts.decreaseItemQuantity,
	);
	const { mutateAsync: toggleCartItemForDelivery } = useMutation(
		({ activeCarts }) => activeCarts.toggleItemForDelivery,
	);

	return {
		cart: {
			fill: actions.cart.fill,
			clear: actions.cart.clear,
			add: async (item: CartItem) => {
				actions.cart.add(item);
				if (is.customer) {
					await addCartItem({
						idempotencyKey: idempotencyKeys.add,
						...item,
					});
				}
			},
			remove: async (id: string) => {
				actions.cart.remove(id);
				if (is.customer) {
					await removeCartItem({ productId: id });
				}
			},
		},
		item: {
			delivery: {
				on: async (id: string, customizationId: string) => {
					actions.item.delivery.on(id, customizationId);
					if (is.customer) {
						await toggleCartItemForDelivery({
							productId: id,
							customizationId: customizationId,
						});
					}
				},
				off: async (id: string) => {
					actions.item.delivery.off(id);
					if (is.customer) {
						await toggleCartItemForDelivery({ productId: id });
					}
				},
			},
			quantity: {
				increment: async (id: string) => {
					actions.item.quantity.increment(id);
					if (is.customer) {
						await increaseCartItemQuantity({
							productId: id,
							amount: 1,
						});
					}
				},
				decrement: async (id: string) => {
					actions.item.quantity.decrement(id);
					if (is.customer) {
						await decreaseCartItemQuantity({
							productId: id,
							amount: 1,
						});
					}
				},
			},
			weight: {
				set: actions.item.weight.set,
			},
		},
	};
};
