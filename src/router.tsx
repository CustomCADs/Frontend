import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { routeTree } from '@/routeTree.gen';
import * as TanstackQuery from '@/app/integrations/tanstack-query';
import { setupApi } from '@/app/integrations/customcads-axios';

export type RouterContext = ReturnType<typeof TanstackQuery.getContext>;

export const getRouter = () => {
	const queryContext = TanstackQuery.getContext();
	setupApi();

	const router = createRouter({
		routeTree,
		context: { ...queryContext },
		defaultPreload: 'intent',
		scrollRestoration: true,
		scrollRestorationBehavior: 'smooth',
		defaultViewTransition: true,
		Wrap: ({ children }) => (
			<TanstackQuery.Provider {...queryContext}>
				{children}
			</TanstackQuery.Provider>
		),
	});

	setupRouterSsrQueryIntegration({
		router,
		wrapQueryClient: false,
		handleRedirects: true,
		queryClient: queryContext.queryClient,
	});

	return router;
};
