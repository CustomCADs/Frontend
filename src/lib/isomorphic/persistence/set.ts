import { createIsomorphicFn } from '@tanstack/react-start';
import * as server from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

type Type = 'cookie' | 'local' | 'full';

export const serialize = (data: unknown) => {
	return typeof data === 'string' ? data : JSON.stringify(data);
};

type Props<TState> = {
	key: string;
	state: TState;
	type?: Type;
};
const set = createIsomorphicFn()
	.client(<TState>({ key, state, type = 'full' }: Props<TState>) => {
		if (type !== 'cookie') localStorage.setItem(key, serialize(state));
		if (type !== 'local') Cookies.set(key, serialize(state));

		return state;
	})
	.server(<TState>({ key, state, type = 'full' }: Props<TState>) => {
		if (type !== 'local') server.setCookie(key, serialize(state));

		return state;
	});

export const create = <TState>(key: string, type?: Type) => {
	return (state: TState) => {
		set({ key, type, state });
		return state;
	};
};
