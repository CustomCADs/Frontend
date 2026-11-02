import { DoorClosedLocked, DoorOpen } from 'lucide-react';
import { useMapMarkerContext } from '@/app/contexts/map-marker';
import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button } from '@/app/components/ui';

const ChooseButton = () => {
	const { flags, updates } = useMapMarkerContext();
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<div className='flex gap-x-2'>
			<Button
				size='sm'
				variant={flags.isChosen ? 'destructive' : 'default'}
				className='grow font-extrabold'
				onClick={flags.isChosen ? updates.unset : updates.choose}
			>
				{flags.isChosen ? <DoorOpen /> : <DoorClosedLocked />}
				{tCheckout(flags.isChosen ? 'unset-address' : 'set-address')}
			</Button>
		</div>
	);
};

export default ChooseButton;
