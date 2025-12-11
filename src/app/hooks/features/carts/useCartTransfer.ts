import { queries, useMutation, useQuery } from '@customcads/react-sdk';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const useCartTransfer = () => {
	const { idempotencyKeys } = useIdempotencyKeys(['add'] as const);
	const { is } = useAuthStore();

	const cartStore = useCartStore();
	const activeCart = useQuery(
		({ activeCarts }) => activeCarts.all,
		is.customer,
	);

	const queryClient = useQueryClient();
	const { mutateAsync: addItem } = useMutation(
		({ activeCarts }) => activeCarts.addItem,
	);

	useEffect(() => {
		const { data: items } = activeCart;
		if (is.customer) {
			const transfer = async () => {
				if (cartStore.items) {
					const newItems = cartStore.items.filter(
						(item) =>
							!items?.some((i) => i.productId === item.productId),
					);

					if (newItems.length) {
						await Promise.all([
							...newItems.map((item) =>
								addItem({
									idempotencyKey: idempotencyKeys.add,
									...item,
								}),
							),
						]);

						await queryClient.invalidateQueries(
							queries.activeCarts.all,
						);
						await queryClient.invalidateQueries(
							queries.activeCarts.count,
						);
					}
				}
			};
			transfer();
		}
	}, [is.customer, activeCart.data]);
};
