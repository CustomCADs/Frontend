import { useMutation } from '@customcads/react-sdk';
import { LogOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/utils/useIsMobile';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import * as authStore from '@/app/stores/auth';
import * as languageStore from '@/app/stores/language';
import CustomIcon from '@/app/components/icon';
import { SidebarMenuButton } from '@/app/components/ui/sidebar';

const Logout = () => {
	const { mutateAsync: logout } = useMutation(
		({ identity }) => identity.logout,
	);

	const tHeader = useLayoutTranslations('header');
	const handleLogout = async () => {
		await logout();
		authStore.logout();
		languageStore.resetStore();
	};

	const isMobile = useIsMobile();
	return isMobile ? (
		<SidebarMenuButton onClick={handleLogout}>
			<CustomIcon
				Icon={LogOut}
				onClick={handleLogout}
				text={tHeader('logout')}
				size={20}
				className='text-lg hover:text-header-foreground'
			/>
		</SidebarMenuButton>
	) : (
		<CustomIcon
			Icon={LogOut}
			onClick={handleLogout}
			text={tHeader('logout')}
		/>
	);
};

export default Logout;
