import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { routeTree } from '@/routeTree.gen';
import * as TanstackQuery from '@/app/integrations/tanstack-query';
import { setupApi } from '@/app/integrations/customcads-axios';
import * as i18n from '@/app/locales/i18n';

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
		Wrap: ({ children }) => {
			i18n.initialize();
			return (
				<TanstackQuery.Provider {...queryContext}>
					{children}
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
