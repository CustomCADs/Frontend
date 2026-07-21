import { useEffect } from 'react';
import { isAxiosError } from 'axios';
import { useMutation, useQuery } from '@customcads/react-sdk';
import { CartItem } from '@/app/types/cart-item';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { INFILL } from '@/app/constants/threejs';

export const useCustomizationCreator = (
	volume: number,
	item?: CartItem,
	enableCreation?: boolean,
) => {
	const { idempotencyKeys } = useIdempotencyKeys(['create'] as const);

	const mutations = {
		create: useMutation(({ customizations }) => customizations.create),
		edit: useMutation(({ customizations }) => customizations.edit),
	};

	const customizationId =
		mutations.create.data?.id ??
		(item?.forDelivery ? item.customizationId : null);

	const { data: customization, error: error } = useQuery(
		({ customizations }) => customizations.single({ id: customizationId! }),
		!!customizationId,
	);

	const createIfMissing = async () => {
		const notFound = isAxiosError(error) && error.status === 404;
		const shouldCreate = !customizationId && !mutations.create.isSuccess;

		if (shouldCreate || notFound) {
			await mutations.create.mutateAsync({
				idempotencyKey: idempotencyKeys.create,
				materialId: 1,
				color: '#ffffff',
				infill: INFILL.min,
				scale: 100 / 100,
				volume,
			});
		}
	};
	useEffect(() => {
		if (enableCreation) createIfMissing();
	}, []);

	return {
		customization,
		edit: mutations.edit.mutateAsync,
	};
};
