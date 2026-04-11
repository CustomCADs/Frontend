import { useMutation } from '@customcads/react-sdk';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import * as localeStore from '@/app/stores/locale';

export const useLogout = () => {
	const { actions } = useCartStore();
	const { mutateAsync: logout } = useMutation(
		({ identity }) => identity.logout,
	);

	const authStore = useAuthStore();
	const handleLogout = async () => {
		await logout();
		authStore.logout();
		actions.cart.clear();
		localeStore.resetStore();
	};

	return handleLogout;
};
