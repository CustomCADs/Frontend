import { Step } from '@/types/form';

const typedEntries = <T extends Record<string, unknown>>(obj: T) => {
	return Object.entries(obj) as {
		[K in keyof T]: [K, T[K]];
	}[keyof T][];
};

export const generateSteps = <Key extends string, Field extends string>(
	params: Record<Key, { label: string; fields: Array<Field> }>,
	hasErrors: (fields: Field[]) => boolean,
): Step<Key>[] =>
	typedEntries(params).map(([key, value], i) => ({
		index: i,
		key: key as Key,
		label: value.label,
		validate: () => !hasErrors(value.fields),
	}));
