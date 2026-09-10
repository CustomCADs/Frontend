import { useEffect } from 'react';
import { isAxiosError } from 'axios';
import { useMutation, useQuery } from '@customcads/react-sdk';
import { CartItem } from '@/app/types/cart-item';
import { CustomizationCad } from '@/app/types/printing';
import { useIdempotencyKeys } from '@/app/hooks/features/idempotency-keys/useIdempotencyKeys';
import { useCustomizationConstruction } from './useCustomizationConstruction';

export const useCustomizationCreator = (
	cad: CustomizationCad,
	item: CartItem | undefined,
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

	const local = useCustomizationConstruction(cad);

	const createIfMissing = async () => {
		const notFound = isAxiosError(error) && error.status === 404;
		const shouldCreate = !customizationId && !mutations.create.isSuccess;

		if (shouldCreate || notFound) {
			await mutations.create.mutateAsync({
				...local,
				idempotencyKey: idempotencyKeys.create,
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
