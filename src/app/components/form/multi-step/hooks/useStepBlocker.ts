import { useEffect, useState } from 'react';
import { AnyFormApi } from '@tanstack/react-form';
import { useSelector } from '@tanstack/react-store';
import { Step } from '@/types/form';

export const useStepBlocker = <Key, Fields>(
	store: AnyFormApi['store'],
	steps: Step<Key, Fields>[],
	current: Step<Key, Fields>,
	checkIfHasError: (fields: Fields[]) => boolean,
) => {
	const [canMoveNext, setCanMoveNext] = useState(current.validate());
	const formValues = useSelector(store, ({ values }) => values);

	const validate = (step: Step<Key, Fields>) => {
		const { fields, key } = step;
		const values = fields.map((key) => formValues[key]);

		useEffect(() => {
			if (key !== current.key) return;
			setCanMoveNext(!checkIfHasError(fields));
		}, [current, ...values]);
	};
	steps.forEach(validate);

	return canMoveNext;
};
