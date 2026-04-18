import { useTranslation } from '../../useTranslation';

type Signin = 'login' | 'forgot' | 'reset';
export const useSigninTranslations = <N extends Signin>(ns: N) =>
	useTranslation(`pages.guest.signin.${ns}`).t;

type Signup = 'register' | 'role';
export const useSignupTranslations = <N extends Signup>(ns: N) =>
	useTranslation(`pages.guest.signup.${ns}`).t;
