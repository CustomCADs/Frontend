/// <reference types="vitest/config" />
import * as vite from 'vite';
import * as vitePlugins from './vite.plugins';
import * as viteHelper from './vite.helper';

export default vite.defineConfig(({ mode }) => ({
	plugins: [
		vitePlugins.tanstackStart({ mode }),
		vitePlugins.react(),
		vitePlugins.tsConfigPaths(),
		vitePlugins.tailwindcss(),
		vitePlugins.cloudflare({ enable: mode !== 'test' }),
	],
	build: { assetsInlineLimit: 0 },
	test: { globals: true, environment: 'jsdom' },
	server: viteHelper.server({ mode }),
}));
