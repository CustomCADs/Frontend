import { createIsomorphicFn } from '@tanstack/react-start';

export const getEnv = createIsomorphicFn()
	.server(() => ({ env: 'server', isServer: true, isClient: false }) as const)
	.client(
		() => ({ env: 'client', isClient: true, isServer: false }) as const,
	);
