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
	phone: string;
	destination: string;
	country: string;
	site: string;
	postcode: string;
	address: string;
	addressNote: string;
};

export type Placeholders = {
	'search-products': string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	'confirm-password': string;
	phone: string;
	country: string;
	site: string;
	address: string;
	addressNote: string;
};

export type State = {
	success: string;
	error: string;
};
