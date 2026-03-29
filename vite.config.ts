/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { readCerts } from './vite.helper';

const config = defineConfig({
	plugins: [
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tailwindcss(),
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tanstackStart({
			prerender: {
				enabled: true,
				failOnError: false,
				autoStaticPathsDiscovery: false,
			},
			sitemap: {
				enabled: process.env.NODE_ENV === 'production',
				host: 'https://www.customcads.com',
			},
			pages: [
				{
					path: '/',
					prerender: { enabled: true, crawlLinks: false },
					sitemap: {
						exclude: false,
						changefreq: 'weekly',
						priority: 1.0,
					},
				},
				{
					path: '/login',
					prerender: { enabled: false, crawlLinks: false },
					sitemap: { exclude: true },
				},
				{
					path: '/gallery',
					prerender: { enabled: false, crawlLinks: false },
					sitemap: { exclude: true },
				},
				{
					path: '/cart',
					prerender: { enabled: false, crawlLinks: false },
					sitemap: { exclude: true },
				},
			],
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
	config.server = { https: readCerts() };

export default config;
