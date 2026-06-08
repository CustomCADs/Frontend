import { useEffect } from 'react';
import { useSelector } from '@tanstack/react-store';
import { store } from '@/app/stores/theme';

export const useThemeSync = () => {
	const state = useSelector(store);

	useEffect(() => {
		document.documentElement.classList.toggle(
			'dark',
			state.theme === 'dark',
		);
	}, [state.theme]);
};
