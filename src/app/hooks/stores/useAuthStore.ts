import { useMemo } from 'react';
import { useStore } from '@tanstack/react-store';
import * as auth from '@/lib/utils/auth';
import { store } from '@/app/stores/auth';

export const useAuthStore = () => {
	const state = useStore(store);
	const is = useMemo(() => auth.is(state), [state]);
	return { ...state, is };
};
