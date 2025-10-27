import { Children } from '@/types/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const getContext = () => {
	const queryClient = new QueryClient();
	return { queryClient };
};

type ProviderType = ReturnType<typeof getContext> & Children;
export const Provider = ({ children, queryClient }: ProviderType) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
