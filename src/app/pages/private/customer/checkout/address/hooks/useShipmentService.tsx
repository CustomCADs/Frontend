import { useEffect } from 'react';
import { useSelector } from '@tanstack/react-store';
import { useQuery } from '@customcads/react-sdk';
import { useCheckoutFormContext } from '@/app/contexts/checkout';

const useShipmentService = () => {
	const { form } = useCheckoutFormContext();

	const { destination, country, site, officeId } = useSelector(
		form.store,
		({ values }) => values,
	);

	const { data: calculations, error } = useQuery(
		({ activeCarts }) =>
			activeCarts.calculateShipment({
				destination,
				country,
				site,
				officeId,
			}),
		!!(country && site) || !!officeId,
	);

	useEffect(() => {
		if (calculations?.length) {
			const [{ service }] = calculations;
			form.setFieldValue('shipmentService', service);
		}
	}, [calculations]);

	return error;
};

export default useShipmentService;
