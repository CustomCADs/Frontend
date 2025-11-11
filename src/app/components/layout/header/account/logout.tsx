import { LogOut } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { useLogout } from '@/app/hooks/features/header/useLogout';

const Logout = () => {
	const tHeader = useLayoutTranslations('header');
	const handleLogout = useLogout();

	return (
		<CustomIcon
			Icon={LogOut}
			onClick={handleLogout}
			text={tHeader('logout')}
		/>
	);
};

export default Logout;
