export type Errors = {
	required: string;
	length: string;
	pattern: string;
	'equal-passwords': string;
};

export type Labels = {
	role: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	rememberMe: string;
};

export type Placeholders = {
	'search-products': string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	'confirm-password': string;
};

export type State = {
	success: string;
	error: string;
};
