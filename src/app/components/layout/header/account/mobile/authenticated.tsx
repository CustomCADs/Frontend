import { LogOut, UserCircle } from 'lucide-react';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { MenuButton } from '@/app/components/ui/sidebar';

const Authenticated = () => {
	const tHeader = useLayoutTranslations('header');
	const { logout } = useLogout();

	return [
		<MenuButton key='account'>
			<CustomIcon
				Icon={UserCircle}
				to='/account'
				text={tHeader('account')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</MenuButton>,
		<MenuButton key='logout' onClick={logout}>
			<CustomIcon
				Icon={LogOut}
				text={tHeader('logout')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</MenuButton>,
	];
};

export default Authenticated;
