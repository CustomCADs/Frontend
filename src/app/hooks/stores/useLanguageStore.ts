import { useStore } from '@tanstack/react-store';
import { store } from '@/app/stores/language';

export const useLanguageStore = () => {
	const state = useStore(store);

	return state;
};
