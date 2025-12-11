import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useIdempotencyKeys = <ExactNames extends readonly string[]>(
	names: ExactNames,
) => {
	type Name = ExactNames[number];
	type SomeNames = readonly Name[];

	const generate = (names: SomeNames) =>
		Object.fromEntries(names.map((name) => [name, uuidv4()])) as Record<
			Name,
			string
		>;

	const keysRef = useRef<Record<Name, string>>(null);
	keysRef.current ??= generate(names);

	return {
		idempotencyKeys: keysRef.current,
		refreshKeys: (namesToRefresh?: SomeNames) => {
			if (!namesToRefresh) {
				keysRef.current = generate(names);
				return;
			}

			keysRef.current = {
				...keysRef.current,
				...generate(namesToRefresh),
			};
		},
	};
};
