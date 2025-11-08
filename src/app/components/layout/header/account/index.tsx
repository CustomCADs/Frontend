import { LogIn } from 'lucide-react';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import Logout from './logout';

const Account = () => {
	const { is } = useAuthStore();
	const tHeader = useLayoutTranslations('header');

	return is.guest ? (
		<CustomIcon Icon={LogIn} to='/login' text={tHeader('login')} />
	) : (
		<Logout />
	);
};

export default Account;
