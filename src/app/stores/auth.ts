import { Role } from '@customcads/react-sdk';
import { Store } from '@tanstack/store';
import { getRoleCookie } from '@/lib/isomorphic';
import { getStore } from '@/lib/isomorphic/store';

type Authenticated = {
	authn: true;
	authz: Role;
};
type Unauthenticated = {
	authn: false;
	authz: null;
};
type State = Authenticated | Unauthenticated;

const getDefaultState = (): State => {
	const role = getRoleCookie() as Role;
	return role ? { authn: true, authz: role } : { authn: false, authz: null };
};
export const get = getStore(() => {
	const store = new Store<State>(getDefaultState());

	return {
		store,
		reset: () => store.setState(getDefaultState),
		login: (role: Role) => {
			store.setState(() => ({ authn: true, authz: role }));
		},
		logout: () => {
			store.setState(() => ({ authn: false, authz: null }));
		},
	};
});
