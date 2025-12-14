/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { ensureCertsExist } from './vite.helper';

const config = defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tailwindcss(),
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tanstackStart({
			spa: {
				enabled: true,
			},
		}),
		viteReact(),
	],
	build: {
		assetsInlineLimit: 0,
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});

if (process.env.NODE_ENV === 'development')
	config.server = { port: 5173, https: ensureCertsExist() };

export default config;
