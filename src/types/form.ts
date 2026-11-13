/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactFormExtendedApi } from '@tanstack/react-form';

export type FormFor<Data> = ReactFormExtendedApi<
	Data,
	any,
	any,
	any,
	any,
	any,
	any,
	any,
	any,
	any,
	any,
	any
>;

export type Step<Key, Field> = {
	index: number;
	key: Key;
	label: string;
	fields: Field[];
	validate: () => boolean;
};
