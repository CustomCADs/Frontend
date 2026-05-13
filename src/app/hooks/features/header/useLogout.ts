import { useMutation } from '@customcads/react-sdk';
import { useCartStore } from '@/app/hooks/stores/useCartStore';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import * as localeStore from '@/app/stores/locale';

export const useLogout = () => {
	const { mutateAsync: logout } = useMutation(
		({ identity }) => identity.logout,
	);

	const { actions } = useCartStore();
	const authStore = useAuthStore();

	const clear = () => {
		authStore.logout();
		actions.cart.clear();
		localeStore.resetStore();
	};

	return {
		logout: async () => {
			await logout();
			clear();
		},
		clearSession: clear,
	};
};
