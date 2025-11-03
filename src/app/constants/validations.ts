const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const USERS = {
	name: {
		max: 62,
		min: 2,
	},
	password: {
		max: 100,
		min: 6,
	},
	email: {
		regex: EMAIL_REGEX,
	},
} as const;
