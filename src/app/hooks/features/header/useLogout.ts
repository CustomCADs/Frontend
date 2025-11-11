import { useMutation } from '@customcads/react-sdk';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import * as languageStore from '@/app/stores/language';

export const useLogout = () => {
	const { mutateAsync: logout } = useMutation(
		({ identity }) => identity.logout,
	);

	const authStore = useAuthStore();
	const handleLogout = async () => {
		await logout();
		authStore.logout();
		languageStore.resetStore();
	};

	return handleLogout;
};
