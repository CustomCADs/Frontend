import { useState } from 'react';
import { type Step } from '@/types/form';

type Props<K> = {
	steps: Array<Step<K>>;
	onNext?: (step: Step<K>) => void;
	onInvalid?: VoidFunction;
	onPrev?: (step: Step<K>) => void;
};
export const useSteps = <K>({ steps, onNext, onPrev, onInvalid }: Props<K>) => {
	const [current, setCurrent] = useState(0);

	return {
		current: steps[current],
		move: {
			next: () => {
				if (steps[current].validate() && current < steps.length - 1) {
					setCurrent((s) => s + 1);
					onNext?.(steps[current + 1]);
				} else onInvalid?.();
			},
			prev: () => {
				if (current > 0) {
					setCurrent((s) => s - 1);
					onPrev?.(steps[current - 1]);
				}
			},
		},
	};
};
