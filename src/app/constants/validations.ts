const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/;

export const USERS = {
	name: { max: 62, min: 2 },
	password: { max: 100, min: 6 },
	email: { regex: EMAIL_REGEX },
	phone: { regex: PHONE_REGEX },
} as const;

export const CHECKOUT = {
	country: { max: 30, min: 4 },
	city: { max: 200, min: 1 },
	postcode: { max: 20, min: 3 },
	address: { max: 100, min: 1 },
};
