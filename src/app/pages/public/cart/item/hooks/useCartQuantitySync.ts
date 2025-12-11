import { DependencyList, useEffect } from 'react';

type Props = { reset: VoidFunction; add: VoidFunction; deps?: DependencyList };
export const useCartQuantitySync = ({ reset, add, deps }: Props) =>
	useEffect(() => {
		reset();
		add();
	}, deps);
