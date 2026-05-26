import { Store } from '@tanstack/store';
import { Ratio } from '@/types/threejs';
import { persistence } from '@/lib/isomorphic';
import { EDITOR } from '@/app/constants/stores';

const persist = persistence.create<Record<string, State>>(EDITOR.store);

type State = {
	materialId: number;
	color: string;
	infill: number;
	size: Ratio;
	scale: number;
	weight: number;
	cost: number;
};
export const defaultState: State = {
	materialId: 1,
	color: '#ffffff',
	infill: 0.2,
	size: { x: 0, y: 0, z: 0 },
	scale: 1,
	weight: 0,
	cost: 0,
};

const loadInitialState = (): Record<string, State> => {
	if (persistence.exists(EDITOR.store))
		return persistence.get<Record<string, State>>(EDITOR.store)!;

	return persist({});
};

export const store = new Store<Record<string, State>>(loadInitialState());
store.subscribe(({ currentVal }) => persist(currentVal));

const resetRecord = (key: string | null) =>
	store.setState((prev) => {
		if (!key) return {};

		return {
			...prev,
			[key]: defaultState,
		};
	});

const addRecord = (key: string) =>
	store.setState((prev) => ({
		...prev,
		[key]: defaultState,
	}));

const removeRecord = (key: string) =>
	store.setState((prev) =>
		Object.fromEntries(Object.entries(prev).filter((x) => x[0] !== key)),
	);

const setMaterialId = (key: string, materialId: number) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], materialId },
	}));

const setColor = (key: string, color: string) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], color },
	}));

const setInfill = (key: string, infill: number) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], infill },
	}));

const setSize = (key: string, size: Ratio) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], size },
	}));

const setScale = (key: string, scale: number) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], scale },
	}));

const setWeight = (key: string, weight: number) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], weight },
	}));

const setCost = (key: string, cost: number) =>
	store.setState((prev) => ({
		...prev,
		[key]: { ...prev[key], cost },
	}));

export const getActions = (key: string) => ({
	record: {
		add: () => addRecord(key),
		remove: () => removeRecord(key),
		reset: () => resetRecord(key),
	},
	set: {
		materialId: (materialId: number) => setMaterialId(key, materialId),
		color: (color: string) => setColor(key, color),
		infill: (infill: number) => setInfill(key, infill),
		size: (size: Ratio) => setSize(key, size),
		scale: (scale: number) => setScale(key, scale),
		weight: (weight: number) => setWeight(key, weight),
		cost: (cost: number) => setCost(key, cost),
	},
});
