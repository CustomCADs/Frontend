import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const getContext = () => {
	const queryClient = new QueryClient();
	return { queryClient };
};

type ProviderType = { children: React.ReactNode; queryClient: QueryClient };
export const Provider = ({ children, queryClient }: ProviderType) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
