import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { RouterContext } from '@/router';
import '@/app/config/env';

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
	}),
	shellComponent: ({ children }: { children: React.ReactNode }) => (
		<html lang='en'>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
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
});
