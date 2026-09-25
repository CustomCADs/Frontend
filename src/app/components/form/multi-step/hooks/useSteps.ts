import { useState } from 'react';
import { type Step } from '@/types/form';

type Props<K, F> = {
	steps: Array<Step<K, F>>;
	on?: {
		next?: (step: Step<K, F>) => void;
		invalid?: VoidFunction;
		prev?: (step: Step<K, F>) => void;
	};
};
export const useSteps = <K, F>({ steps, on }: Props<K, F>) => {
	const [current, setCurrent] = useState(0);

	return {
		current: steps[current],
		move: {
			next: () => {
				if (steps[current].validate() && current < steps.length - 1) {
					setCurrent((s) => s + 1);
					on?.next?.(steps[current + 1]);
				} else on?.invalid?.();
			},
			prev: () => {
				if (current > 0) {
					setCurrent((s) => s - 1);
					on?.prev?.(steps[current - 1]);
				}
			},
		},
	};
};
