import * as signin from './signin';
import * as signup from './signup';

export type Guest = {
	'pages.guest.signin.login': signin.Login;
	'pages.guest.signin.forgot': signin.Forgot;
	'pages.guest.signin.reset': signin.Reset;
	'pages.guest.signup.register': signup.Register;
	'pages.guest.signup.role': signup.ChooseRole;
	'pages.guest.signup.email': signup.ConfirmEmail;
};
