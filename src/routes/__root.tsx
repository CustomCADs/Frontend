import { isAxiosError } from 'axios';
import {
	AnyRouteMatch,
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { AppError } from '@/types/errors';
import { RouterContext } from '@/router';
import { cn } from '@/lib/utils/tailwindcss';
import { isLightThemeCookie } from '@/lib/isomorphic/theme';
import '@/app/config/env';
import Layout from '@/app/components/layout';
import ErrorPage from '@/app/components/error';
import { TanStackDevtools } from '@/app/integrations/tanstack-devtools';
import * as i18n from '@/app/locales/i18n';
import '@/index.css';

let cssUrl: string | undefined;
if (!import.meta.env.DEV) {
	await import('@/index.css?url').then((i) => (cssUrl = i.default));
}

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => {
		const links: AnyRouteMatch['links'] = [];
		if (cssUrl) links.push({ rel: 'stylesheet', href: cssUrl });

		return {
			meta: [
				{
					charSet: 'utf-8',
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					title: 'CustomCADs',
				},
			],
			links,
		};
	},
	shellComponent: ({ children }) => {
		const { language } = i18n.initialize();
		const lang = language.split('-')[0] ?? 'en';
		return (
			<html lang={lang} className={cn({ dark: !isLightThemeCookie() })}>
				<head>
					<HeadContent />
				</head>
				<body>
					<Layout>{children}</Layout>
					<TanStackDevtools />
					<Scripts />
				</body>
			</html>
		);
	},
	errorComponent: ({ error }) => {
		if (error instanceof AppError) {
			return <ErrorPage status={null} error={error} />;
		}

		if (isAxiosError(error)) {
			switch (error.response?.status) {
				case 400:
				case 401:
				case 403:
				case 404:
					return <ErrorPage status={error.response.status} />;
				case undefined:
				default:
					break;
			}
		}

		return <ErrorPage status={null} />;
	},
	notFoundComponent: () => <ErrorPage status={404} />,
});
