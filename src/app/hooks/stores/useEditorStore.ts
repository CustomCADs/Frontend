import { useStore } from '@tanstack/react-store';
import { store, getActions, defaultState } from '@/app/stores/editor';

export const useEditorStore = <TState>(
	id: string,
	selector: (state: (typeof store.state)[string]) => TState,
) => {
	const actions = getActions(id);
	if (!store.state[id]) {
		actions.record.add();
	}

	return useStore(store, (store) => selector(store[id] ?? defaultState));
};
