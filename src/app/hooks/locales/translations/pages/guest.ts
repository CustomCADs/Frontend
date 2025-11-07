import { useTranslation } from '../../useTranslation';

type Signin = 'login';
export const useSigninTranslations = <N extends Signin>(ns: N) =>
	useTranslation(`pages.guest.signin.${ns}`).t;
