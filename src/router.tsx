import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import * as TanstackQuery from '@/app/integrations/tanstack-query';
import { routeTree } from '@/routeTree.gen';
import '@/app/locales/i18n';

export type RouterContext = ReturnType<typeof TanstackQuery.getContext>;

export const getRouter = () => {
	const queryContext = TanstackQuery.getContext();

	const router = createRouter({
		routeTree,
		context: { ...queryContext },
		defaultPreload: 'intent',
		scrollRestoration: true,
		scrollRestorationBehavior: 'smooth',
		Wrap: (props: { children: React.ReactNode }) => {
			return (
				<TanstackQuery.Provider {...queryContext}>
					{props.children}
				</TanstackQuery.Provider>
			);
		},
	});

	setupRouterSsrQueryIntegration({
		router,
		wrapQueryClient: false,
		handleRedirects: true,
		queryClient: queryContext.queryClient,
	});

	return router;
};
