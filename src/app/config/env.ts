import { z } from 'zod';

export const serverEnv = z.object({}).parse(process.env);

export const clientEnv = z
	.object({
		VITE_API_URL: z.url(),
		VITE_API_VERSION: z.templateLiteral(['v', z.number()]),
		VITE_STRIPE_PUBLISHABLE_KEY: z.templateLiteral(['pk_', z.string()]),
	})
	.parse(import.meta.env);
