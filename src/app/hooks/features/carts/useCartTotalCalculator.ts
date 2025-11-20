import { useState } from 'react';

export const useCartTotalCalculator = () => {
	const [money, setMoney] = useState<Record<string, number>>({});

	return [
		money,
		({ id, set }: { id: string; set: (prev: number) => number }) =>
			setMoney((prev) => ({
				...prev,
				[id]: set(prev[id] ?? 0),
			})),
	] as const;
};
