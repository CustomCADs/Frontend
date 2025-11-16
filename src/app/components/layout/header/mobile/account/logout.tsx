import { LogOut } from 'lucide-react';
import { useLogout } from '@/app/hooks/features/header/useLogout';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { SidebarMenuButton } from '@/app/components/ui/sidebar';

const Logout = () => {
	const tHeader = useLayoutTranslations('header');
	const handleLogout = useLogout();

	return (
		<SidebarMenuButton onClick={handleLogout}>
			<CustomIcon
				Icon={LogOut}
				text={tHeader('logout')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</SidebarMenuButton>
	);
};

export default Logout;
