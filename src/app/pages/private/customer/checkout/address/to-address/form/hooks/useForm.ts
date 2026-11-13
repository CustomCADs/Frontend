import { useEffect, useState } from 'react';
import { useSelector } from '@tanstack/react-store';
import { IntentedCategory } from '@/app/types/map';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import { useNominatimMutation } from '@/app/hooks/features/nominatim/useNominatimMutation';

export const useForm = () => {
	const { form } = useCheckoutFormContext();
	const { country, site, postcode, address } = useSelector(
		form.store,
		({ values }) => values,
	);
	const nominatim = useNominatimMutation();

	const search = () =>
		nominatim.mutateAsync([
			country ? `&country=${country}` : '',
			site ? `&city=${site}` : '',
			address ? `&street=${address}` : '',
			postcode ? `&postalcode=${postcode}` : '',
		]);

	useEffect(() => {
		search();
	}, []);
	const [isPending, setIsPending] = useState(false);

	return {
		form,
		isPending,
		addresses: nominatim.data,
		status: nominatim.status,
		getCategory: (): IntentedCategory =>
			address ? 'address' : site ? 'site' : 'country',
		handleChange: () => !isPending && setIsPending(true),
		handleSubmit: () => {
			if (!isPending) return;
			setIsPending(false);
			search();
		},
	};
};
