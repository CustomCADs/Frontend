import { useEffect, useState } from 'react';
import { useSelector } from '@tanstack/react-store';
import { isDarkThemeCookie } from '@/lib/isomorphic/theme';
import { store } from '@/app/stores/theme';

export const useThemeStore = () => {
	const state = useSelector(store);

	const [isDarkMode, setIsDarkMode] = useState(isDarkThemeCookie());
	useEffect(() => {
		setIsDarkMode(state.theme === 'dark');
	}, [state.theme]);

	return { ...state, isDarkMode, isLightMode: !isDarkMode };
};
