import { Store } from '@tanstack/store';
import { getRoleCookie } from '@/lib/isomorphic';
import { getStore } from '@/lib/isomorphic/store';

type State = {
	authn: boolean;
	authz: string | null;
};
const getDefaultState = () => ({
	authn: Boolean(getRoleCookie()),
	authz: getRoleCookie() ?? null,
});
export const get = getStore(() => {
	const store = new Store<State>(getDefaultState());

	return {
		store,
		reset: () => store.setState(getDefaultState),
		login: (role: string) => {
			store.setState(() => ({ authn: true, authz: role }));
		},
		logout: () => {
			store.setState(() => ({ authn: false, authz: null }));
		},
	};
});
