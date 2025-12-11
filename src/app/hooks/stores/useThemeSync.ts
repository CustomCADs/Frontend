import { useEffect } from 'react';
import { useStore } from '@tanstack/react-store';
import { store } from '@/app/stores/theme';

export const useThemeSync = () => {
	const state = useStore(store);

	useEffect(() => {
		document.documentElement.classList.toggle(
			'dark',
			state.theme === 'dark',
		);
	}, [state.theme]);
};
