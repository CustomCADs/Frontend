/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

const config = defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tailwindcss(),
		tanstackStart({
			spa: {
				enabled: true,
			},
		}),
		viteReact(),
	],
	server: {
		port: 5173,
		https: {
			key: fs.readFileSync(path.resolve(__dirname, 'certs/key.pem')),
			cert: fs.readFileSync(path.resolve(__dirname, 'certs/cert.pem')),
		},
	},
	build: {
		assetsInlineLimit: 0,
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});

export default config;
