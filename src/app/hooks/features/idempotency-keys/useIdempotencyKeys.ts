import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useIdempotencyKeys = <AllNames extends readonly string[]>(
	allNames: AllNames,
) => {
	type Name = AllNames[number];
	type SomeNames = readonly Name[];

	const generate = (names: SomeNames) =>
		Object.fromEntries(names.map((name) => [name, uuidv4()])) as Record<
			Name,
			string
		>;

	const keysRef = useRef<Record<Name, string>>(null);
	keysRef.current ??= generate(allNames);

	return {
		idempotencyKeys: keysRef.current,
		refreshKeys: (namesToRefresh?: SomeNames) => {
			if (!namesToRefresh) {
				keysRef.current = generate(allNames);
				return;
			}

			keysRef.current = {
				...keysRef.current,
				...generate(namesToRefresh),
			};
		},
	};
};
