import { useEffect, useState } from 'react';
import { useSelector } from '@tanstack/react-store';
import { useQuery } from '@customcads/react-sdk';
import { useCheckoutFormContext } from '@/app/contexts/checkout';

type Block = {
	complexName: string;
	blockNo: string;
	streetName: undefined;
	streetNo: undefined;
};
type Street = {
	complexName: undefined;
	blockNo: undefined;
	streetName: string;
	streetNo: string | undefined;
};

type Address = (Block | Street) & {
	countryId: number;
	siteName: string;
	postCode: string;
	fullAddressString: string;
};
type Office = { id: number; address: Address };

type Props = { onOfficeChosen: (office: Office) => void };
const SpeedyWidget = ({ onOfficeChosen }: Props) => {
	const { form } = useCheckoutFormContext();

	const { countryName, siteName } = {
		countryName: useSelector(form.store, ({ values }) => values.country),
		siteName: useSelector(form.store, ({ values }) => values.site),
	};
	const { data: country } = useQuery(
		({ shipments }) => shipments.country({ name: countryName }),
		!!countryName,
	);

	const [office, setOffice] = useState<Office>();
	useEffect(() => {
		const handler = (e: { data: Office }) => {
			if (!e.data?.address) return;
			const { data: office } = e;

			setOffice(office);
			onOfficeChosen(office);
		};

		window.addEventListener('message', handler);
		return () => window.removeEventListener('message', handler);
	}, []);

	return (
		<iframe
			id='speedy-office-locator'
			name='speedy-office-locator'
			src={`https://services.speedy.bg/office_locator_widget_v3/office_locator.php?${country ? `countryId=${country.countryId}&` : ''}${siteName ? `siteName=${siteName}&` : ''}${office ? `officeID=${office.id}&` : ''}lang=en&pickUp=1&officesFilterOnTheMap=0&showOfficesList=0&selectOfficeButtonCaption=Choose this Office`}
			className='w-3xl aspect-video rounded-lg'
		/>
	);
};

export default SpeedyWidget;
