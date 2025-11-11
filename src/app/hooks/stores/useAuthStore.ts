import { useStore } from '@tanstack/react-store';
import { is } from '@/lib/utils/auth';
import * as auth from '@/app/stores/auth';

export const useAuthStore = () => {
	const { store, ...actions } = auth.store();
	const state = useStore(store);

	return {
		is: is(state),
		...state,
		...actions,
	};
};
