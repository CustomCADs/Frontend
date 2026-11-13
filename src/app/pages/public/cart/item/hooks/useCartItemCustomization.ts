import { useEffect } from 'react';
import { CustomizationResponse, useQuery } from '@customcads/react-sdk';

type Result =
	| { customization?: undefined; onRemoveCost?: undefined }
	| { customization: CustomizationResponse; onRemoveCost: VoidFunction };

export const useCartItemCustomization = (
	customizationId: string,
	sum: { reset: VoidFunction; addFrom: (num: number) => void },
): Result => {
	const { data: customization } = useQuery(({ customizations }) =>
		customizations.single({ id: customizationId }),
	);

	useEffect(() => {
		sum.reset();
		customization && sum.addFrom(customization.cost);
	}, [customization]);
	if (!customization) return {};

	const onRemove = () => sum.addFrom(-customization.cost);
	return { customization, onRemoveCost: onRemove };
};
