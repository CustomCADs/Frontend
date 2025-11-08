import { LogIn, UserCog, UserPen } from 'lucide-react';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import Logout from './logout';

const Account = () => {
	const { is } = useAuthStore();
	const tHeader = useLayoutTranslations('header');

	const authenticated = (
		<>
			<CustomIcon Icon={UserCog} />
			<Logout />
		</>
	);
	const unauthenticated = (
		<>
			<CustomIcon Icon={LogIn} to='/login' text={tHeader('login')} />
			<CustomIcon Icon={UserPen} to='.' text={tHeader('register')} />
		</>
	);

	return is.guest ? unauthenticated : authenticated;
};

export default Account;
