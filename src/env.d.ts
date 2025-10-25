/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_API_VERSION: string;
	readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare global {
	namespace NodeJS {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		type ProcessEnv = {};
	}
}
