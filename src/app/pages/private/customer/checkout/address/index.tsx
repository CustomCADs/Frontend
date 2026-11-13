import { useSelector } from '@tanstack/react-store';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import FormField from '@/app/components/fields/field';
import { Error } from '@/app/components/form/error';
import useShipmentService from './hooks/useShipmentService';
import OfficeLocator from './to-office';
import AddressLocator from './to-address';

const Address = () => {
	const { form } = useCheckoutFormContext();
	const destination = useSelector(
		form.store,
		({ values: x }) => x.destination,
	);
	const error = useShipmentService();

	return (
		<div className='flex flex-col justify-center gap-y-8'>
			{destination === 'address' && <AddressLocator />}
			{destination === 'office' && <OfficeLocator />}
			<div className='flex flex-col gap-y-2'>
				<form.Field name='addressNote'>
					{(api) => (
						<FormField
							api={api}
							canEdit={destination === 'address'}
						/>
					)}
				</form.Field>
			</div>
			{error && <Error message={error} />}
		</div>
	);
};

export default Address;
