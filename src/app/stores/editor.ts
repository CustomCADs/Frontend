import { Store } from '@tanstack/store';
import { Ratio } from '@/types/threejs';
import * as persistence from '@/lib/isomorphic/persistence';
import { EDITOR } from '@/app/constants/stores';
import { getEnv } from '@/lib/isomorphic/env';

const persist = persistence.create(EDITOR.store);

type EditorState = {
	materialId: number;
	color: string;
	infill: number;
	size: Ratio;
	scale: number;
	weight: number;
	cost: number;
};
export const defaultState: EditorState = {
	materialId: 1,
	color: '#ffffff',
	infill: 0.2,
	size: { x: 0, y: 0, z: 0 },
	scale: 1,
	weight: 0,
	cost: 0,
};

const loadInitialState = (): Record<string, EditorState> => {
	if (getEnv().isServer) return {};

	const persistedState = persistence.get(EDITOR.store);
	if (persistedState) return JSON.parse(persistedState);

	const state = {};
	persist(state);
	return state;
};

export const store = new Store<Record<string, EditorState>>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

const resetRecord = (id: string | null) =>
	store.setState((prev) => {
		if (!id) return {};

		return {
			...prev,
			[id]: defaultState,
		};
	});

const addRecord = (id: string) =>
	store.setState((prev) => ({
		...prev,
		[id]: defaultState,
	}));

const removeRecord = (id: string) =>
	store.setState((prev) =>
		Object.fromEntries(Object.entries(prev).filter((x) => x[0] !== id)),
	);

const setMaterialId = (id: string, materialId: number) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], materialId },
	}));

const setColor = (id: string, color: string) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], color },
	}));

const setInfill = (id: string, infill: number) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], infill },
	}));

const setSize = (id: string, size: Ratio) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], size },
	}));

const setScale = (id: string, scale: number) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], scale },
	}));

const setWeight = (id: string, weight: number) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], weight },
	}));

const setCost = (id: string, cost: number) =>
	store.setState((prev) => ({
		...prev,
		[id]: { ...prev[id], cost },
	}));

export const getActions = (id: string) => ({
	record: {
		add: () => addRecord(id),
		remove: () => removeRecord(id),
		reset: () => resetRecord(id),
	},
	set: {
		materialId: (materialId: number) => setMaterialId(id, materialId),
		color: (color: string) => setColor(id, color),
		infill: (infill: number) => setInfill(id, infill),
		size: (size: Ratio) => setSize(id, size),
		scale: (scale: number) => setScale(id, scale),
		weight: (weight: number) => setWeight(id, weight),
		cost: (cost: number) => setCost(id, cost),
	},
});
