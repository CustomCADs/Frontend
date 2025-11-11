import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import Unauthenticated from './unauthenticated';
import Logout from './logout';

const Account = () => {
	const { is } = useAuthStore();

	return is.guest ? <Unauthenticated /> : <Logout />;
};

export default Account;
