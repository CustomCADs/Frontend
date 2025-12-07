import { createIsomorphicFn } from '@tanstack/react-start';
import * as server from '@tanstack/react-start/server';
import Cookies from 'js-cookie';

type Props<TState> = {
	key: string;
	state: TState;
	selected?: { key: string; data: unknown };
};
const set = createIsomorphicFn()
	.client(<TState>({ key, state, selected }: Props<TState>) => {
		localStorage.setItem(key, JSON.stringify(state));

		if (selected) {
			Cookies.set(selected.key ?? key, JSON.stringify(selected.data));
		}
	})
	.server(<TState>({ key, selected }: Props<TState>) => {
		if (selected) {
			server.setCookie(
				selected.key ?? key,
				JSON.stringify(selected.data),
			);
		}
	});

export const create = <TState>(
	key: string,
	selector?: (state: TState) => { data: unknown; key: string },
) => {
	return (state: TState) => set({ key, state, selected: selector?.(state) });
};
