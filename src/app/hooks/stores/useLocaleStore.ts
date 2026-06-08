import { useSelector } from '@tanstack/react-store';
import { store } from '@/app/stores/locale';

export const useLocaleStore = () => {
	const state = useSelector(store);

	return state;
};
