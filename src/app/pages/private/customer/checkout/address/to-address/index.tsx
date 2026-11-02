import { useState } from 'react';
import { IntentedCategory, Address } from '@/app/types/map';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button, dialog } from '@/app/components/ui';
import AddressForm from './form';
import AddressMap from './map';

const AddressLocator = () => {
	const [category, setCategory] = useState<IntentedCategory>('world');
	const [addresses, setAddresses] = useState<Address[]>([]);

	const [isOpen, setIsOpen] = useState(false);
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
			<div className='flex justify-around'>
				<dialog.Header className='items-center'>
					<dialog.Title>{tCheckout('address-map')}</dialog.Title>
					<dialog.Description>
						{tCheckout('address-map-description')}
					</dialog.Description>
				</dialog.Header>
				<dialog.Trigger>
					<Button tag='span' size='lg' className='text-lg'>
						{tCheckout('open')}
					</Button>
				</dialog.Trigger>
			</div>
			<dialog.Content className='xl:min-w-3xl md:min-w-2xl'>
				<AddressForm
					onAddressesChange={setAddresses}
					onCategoryChange={setCategory}
				/>
				<AddressMap data={addresses} category={category} />
			</dialog.Content>
		</dialog.Root>
	);
};

export default AddressLocator;
