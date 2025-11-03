import { LogIn } from 'lucide-react';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import HeaderIcon from '../icon';
import Logout from './logout';

const AccountDropdown = () => {
	const { is } = useAuthStore();
	const tHeader = useLayoutTranslations('header');

	return is.guest ? (
		<HeaderIcon Icon={LogIn} to='/login' text={tHeader('login')} />
	) : (
		<Logout />
	);
};

export default AccountDropdown;
