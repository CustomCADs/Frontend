import { LogOut, UserCircle } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import { useLogout } from '@/app/hooks/features/header/useLogout';

const Authenticated = () => {
	const tHeader = useLayoutTranslations('header');
	const { logout } = useLogout();

	return [
		<CustomIcon key='account' Icon={UserCircle} to='/account' />,
		<CustomIcon
			key='logout'
			Icon={LogOut}
			onClick={logout}
			text={tHeader('logout')}
		/>,
	];
};

export default Authenticated;
