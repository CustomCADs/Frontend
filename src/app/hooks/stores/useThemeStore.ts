import { useEffect, useState } from 'react';
import { useStore } from '@tanstack/react-store';
import { isDarkThemeCookie } from '@/lib/isomorphic/theme';
import { store } from '@/app/stores/theme';

export const useThemeStore = (props?: { render?: boolean }) => {
	const state = useStore(store);

	useEffect(() => {
		if (props?.render) {
			document.documentElement.classList.toggle(
				'dark',
				state.theme === 'dark',
			);
		}
	}, [state.theme]);

	const [isDarkMode, setIsDarkMode] = useState(isDarkThemeCookie());
	useEffect(() => {
		setIsDarkMode(state.theme === 'dark');
	}, [state.theme]);

	return { ...state, isDarkMode, isLightMode: !isDarkMode };
};
