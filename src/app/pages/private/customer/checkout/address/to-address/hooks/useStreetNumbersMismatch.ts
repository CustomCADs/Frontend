import { useEffect, useState } from 'react';
import { useSelector } from '@tanstack/react-store';
import { hasMatchingStreetNumber } from '@/lib/utils/ui/text';
import { useCheckoutFormContext } from '@/app/contexts/checkout';

export const useStreetNumbersMismatch = () => {
	const { form, selectedAddress } = useCheckoutFormContext();
	const address = useSelector(form.store, ({ values }) => values.address);

	const [isMismatch, setIsMismatch] = useState(false);
	useEffect(() => {
		if (!selectedAddress) {
			setIsMismatch(false);
			return;
		}

		setIsMismatch(
			!hasMatchingStreetNumber(selectedAddress.display_name, address),
		);
	}, [selectedAddress]);

	return { isMismatch, override: (value: boolean) => setIsMismatch(value) };
};
