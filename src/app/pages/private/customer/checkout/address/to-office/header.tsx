import { useCustomerTranslations } from '@/app/hooks/locales/translations/pages/private';
import { Button, dialog } from '@/app/components/ui';

const Header = () => {
	const tCheckout = useCustomerTranslations('checkout');

	return (
		<div className='flex justify-around'>
			<dialog.Header className='items-center'>
				<dialog.Title>{tCheckout('speedy-map')}</dialog.Title>
				<dialog.Description>
					{tCheckout('speedy-map-description')}
				</dialog.Description>
			</dialog.Header>
			<dialog.Trigger>
				<Button tag='span' size='lg' className='text-lg'>
					{tCheckout('open')}
				</Button>
			</dialog.Trigger>
		</div>
	);
};

export default Header;
