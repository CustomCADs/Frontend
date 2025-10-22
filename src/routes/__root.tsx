import { isAxiosError } from 'axios';
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { AppError } from '@/types/errors';
import { RouterContext } from '@/router';
import '@/app/config/env';
import Layout from '@/app/components/layout';
import ErrorPage from '@/app/components/state/error';
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
		links: [
			{
				rel: 'stylesheet',
				href: cssUrl,
			},
		],
	}),
	shellComponent: ({ children }: { children: React.ReactNode }) => (
		<html lang='en'>
			<head>
				<HeadContent />
			</head>
			<body>
				<Layout>{children}</Layout>
				<TanStackDevtools
					config={{
						defaultOpen: false,
						hideUntilHover: true,
						openHotkey: ['Alt', 'A'],
						panelLocation: 'bottom',
						position: 'bottom-left',
						theme: 'dark',
						triggerImage:
							'https://tanstack.com/images/logos/logo-color-100.png',
					}}
					plugins={[
						{
							name: 'Tanstack Router',
							render: <TanStackRouterDevtoolsPanel />,
						},
						{
							name: 'Tanstack Query',
							render: <ReactQueryDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	),
	errorComponent: ({ error }) => {
		if (isAxiosError(error)) {
			switch (error.response?.status) {
				case 400:
					return <ErrorPage status={400} />;
				case 401:
					return <ErrorPage status={401} />;
				case 403:
					return <ErrorPage status={403} />;
				case 404:
					return <ErrorPage status={404} />;
				case undefined:
				default:
					return <ErrorPage status={null} />;
			}
		}

		if (error instanceof AppError) {
			return <ErrorPage status={null} error={error} />;
		}
		return <ErrorPage status={null} />;
	},
	notFoundComponent: () => <ErrorPage status={404} />,
});
