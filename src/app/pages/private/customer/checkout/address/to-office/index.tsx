import { useState } from 'react';
import { toSpacedPascalCase } from '@/lib/utils/ui/text';
import { useCheckoutFormContext } from '@/app/contexts/checkout';
import { dialog } from '@/app/components/ui';
import SpeedyWidget from './speedy-widget';
import Header from './header';

const OfficeLocator = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { form } = useCheckoutFormContext();

	return (
		<dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
			<Header />
			<dialog.Content className='sm:max-w-[60vw]'>
				<SpeedyWidget
					onOfficeChosen={({ id: officeId, address }) => {
						setIsOpen(false);
						form.setFieldValue('officeId', officeId);

						form.setFieldValue('postcode', address.postCode);
						form.setFieldValue(
							'addressNote',
							address.fullAddressString,
						);

						form.setFieldValue(
							'site',
							toSpacedPascalCase(address.siteName),
						);
						form.setFieldValue(
							'address',
							address.streetName !== undefined
								? `${toSpacedPascalCase(address.streetName)} ${address.streetNo}`.trim()
								: `${toSpacedPascalCase(address.complexName)} бл. ${address.blockNo}`.trim(),
						);
					}}
				/>
			</dialog.Content>
		</dialog.Root>
	);
};

export default OfficeLocator;
