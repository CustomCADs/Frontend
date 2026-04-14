import { DependencyList, useEffect } from 'react';
import * as hubs from '@/lib/hubs';

type Props = {
	name: hubs.Name;
	condition?: boolean;
	deps?: DependencyList;
};
export const useConnection = ({ name, condition, deps }: Props) =>
	useEffect(() => {
		if (condition === undefined || condition) {
			hubs.connect(name);
		}
	}, deps);
