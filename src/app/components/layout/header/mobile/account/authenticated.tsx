import { LogOut, UserCircle } from 'lucide-react';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { SidebarMenuButton } from '@/app/components/ui/sidebar';

const Authenticated = () => {
	const tHeader = useLayoutTranslations('header');
	const handleLogout = useLogout();

	return [
		<SidebarMenuButton key='account'>
			<CustomIcon
				Icon={UserCircle}
				to='/account'
				text={tHeader('account')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</SidebarMenuButton>,
		<SidebarMenuButton key='logout' onClick={handleLogout}>
			<CustomIcon
				Icon={LogOut}
				text={tHeader('logout')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</SidebarMenuButton>,
	];
};

export default Authenticated;
