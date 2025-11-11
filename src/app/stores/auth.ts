import { Store } from '@tanstack/store';
import { getRoleCookie } from '@/lib/isomorphic/api';
import { getStore } from '@/lib/isomorphic/store';

type AuthState = {
	authn: boolean;
	authz: string | null;
};
const getDefaultState = (role?: string): AuthState => ({
	authn: Boolean(role),
	authz: role ?? null,
});
export const store = getStore(() => {
	const store = new Store<AuthState>(getDefaultState(getRoleCookie()));

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
