import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackDevtools as TanStackReactDevtools } from '@tanstack/react-devtools';

export const TanStackDevtools = () => (
	<TanStackReactDevtools
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
);
