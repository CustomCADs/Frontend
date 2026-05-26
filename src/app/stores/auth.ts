import { Store } from '@tanstack/store';
import { getRoleCookie } from '@/lib/isomorphic';
import { getStore } from '@/lib/isomorphic/store';

type State = {
	authn: boolean;
	authz: string | null;
};
const getDefaultState = (role?: string): State => ({
	authn: Boolean(role),
	authz: role ?? null,
});
export const get = getStore(() => {
	const store = new Store<State>(getDefaultState(getRoleCookie()));

	return {
		store,
		reset: () => store.setState(getDefaultState(getRoleCookie())),
		login: (role: string) => {
			store.setState(() => ({ authn: true, authz: role }));
		},
		logout: () => {
			store.setState(() => ({ authn: false, authz: null }));
		},
	};
});
