import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';

const tanStackStartPlugin = ({ mode }: { mode: string }) =>
	tanstackStart({
		prerender: {
			enabled: false,
			failOnError: false,
			autoStaticPathsDiscovery: false,
		},
		sitemap: {
			enabled: mode === 'production',
			host: 'https://www.customcads.com',
		},
		pages: [
			{
				path: '/',
				prerender: { enabled: false, crawlLinks: false },
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
				path: '/register',
				prerender: { enabled: false, crawlLinks: false },
				sitemap: { exclude: true },
			},
			{
				path: '/reset-password',
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
	});

const tsConfigPathsPlugin = () =>
	viteTsConfigPaths({
		projects: ['./tsconfig.json'],
	});

const cloudflarePlugin = ({ enable }: { enable: boolean }) =>
	enable ? cloudflare({ viteEnvironment: { name: 'ssr' } }) : undefined;

export {
	tanStackStartPlugin as tanstackStart,
	viteReact as react,
	tsConfigPathsPlugin as tsConfigPaths,
	tailwindcss,
	cloudflarePlugin as cloudflare,
};
