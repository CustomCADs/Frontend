import { createIsomorphicFn } from '@tanstack/react-start';

let store = null;
export const getStore = <TStore>(createStore: () => TStore) =>
	createIsomorphicFn()
		.server(createStore)
		.client(() => {
			store ??= createStore();
			return store as TStore;
		});
