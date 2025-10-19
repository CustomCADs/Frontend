/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ImportMeta = {
	readonly env: {
		readonly VITE_API_URL: string;
		readonly VITE_API_VERSION: string;
		readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
	};
};

declare global {
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		type ProcessEnv = {};
	}
}

export {};
