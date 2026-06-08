import { DependencyList, useEffect } from 'react';
import { type Name, connect } from '@/lib/hubs';

type Props = {
	name: Name;
	condition?: boolean;
	deps?: DependencyList;
};
export const useConnection = ({ name, condition, deps }: Props) =>
	useEffect(() => {
		if (condition === undefined || condition) {
			connect(name);
		}
	}, deps);
