import { isAxiosError } from 'axios';
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { AppError } from '@/types/errors';
import { RouterContext } from '@/router';
import { cn } from '@/lib/utils/tailwindcss';
import { isDarkThemeCookie } from '@/lib/isomorphic/theme';
import '@/app/config/env';
import Layout from '@/app/components/layout';
import ErrorPage from '@/app/components/error';
import { TanStackDevtools } from '@/app/integrations/tanstack-devtools';
import cssUrl from '@/index.css?url';

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
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
		links: [{ rel: 'stylesheet', href: cssUrl }],
	}),
	shellComponent: ({ children }) => (
		<html lang='en' className={cn({ dark: isDarkThemeCookie() })}>
			<head>
				<HeadContent />
			</head>
			<body>
				<Layout>{children}</Layout>
				<TanStackDevtools />
				<Scripts />
			</body>
		</html>
	),
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
