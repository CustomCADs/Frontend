import { useStore } from '@tanstack/react-store';
import { store } from '@/app/stores/locale';

export const useLocaleStore = () => {
	const state = useStore(store);

	return state;
};
