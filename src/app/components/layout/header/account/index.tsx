import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import Unauthenticated from './unauthenticated';
import Authenticated from './authenticated';

const Account = () => {
	const { is } = useAuthStore();

	return is.guest ? <Unauthenticated /> : <Authenticated />;
};

export default Account;
