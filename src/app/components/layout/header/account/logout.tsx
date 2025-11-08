import { useMutation } from '@customcads/react-sdk';
import { LogOut } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import * as authStore from '@/app/stores/auth';
import * as languageStore from '@/app/stores/language';
import CustomIcon from '@/app/components/icon';

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

	return (
		<CustomIcon
			Icon={LogOut}
			onClick={handleLogout}
			text={tHeader('logout')}
		/>
	);
};

export default Logout;
