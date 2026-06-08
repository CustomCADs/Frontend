import { useSelector } from '@tanstack/react-store';
import { auth } from '@/lib/utils';
import * as authStore from '@/app/stores/auth';

export const useAuthStore = () => {
	const { store, ...actions } = authStore.get();
	const state = useSelector(store);

	return {
		is: auth.is(state),
		...state,
		...actions,
	};
};
