export type Step<K> = {
	index: number;
	key: K;
	label: string;
	validate: () => boolean;
};
