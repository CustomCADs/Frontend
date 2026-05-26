import { getEnv } from '@/lib/isomorphic/env';
import { useEffect, useState } from 'react';

export const useIsMobile = (mobileBreakpoint?: number) => {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
	const breakpoint = mobileBreakpoint ?? 768;

	useEffect(() => {
		if (getEnv().isServer) return;

		const onChange = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};
		onChange();

		const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
		mql.addEventListener('change', onChange);
		return () => mql.removeEventListener('change', onChange);
	}, []);

	return { isMobile };
};
