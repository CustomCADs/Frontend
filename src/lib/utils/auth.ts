import { getRoleCookie } from '../isomorphic/api';

type Props = { authn: boolean; authz: string | null };
export type Returns = {
	guest: boolean;
	customer: boolean;
	creator: boolean;
	contributor: boolean;
	designer: boolean;
	admin: boolean;
};

const solve = ({ authn, authz }: Props): Returns => {
	const roles = {
		guest: !authn,
		customer: authn && authz === 'Customer',
		contributor: authn && authz === 'Contributor',
		designer: authn && authz === 'Designer',
		admin: authn && authz === 'Admin',
	};

	return {
		...roles,
		creator: roles.contributor || roles.designer,
	};
};

export const is = (props?: Props): Returns =>
	props
		? solve(props)
		: solve({
				authn: !!getRoleCookie(),
				authz: getRoleCookie() ?? null,
			});
