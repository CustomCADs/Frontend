import { QueryClient, QueryKey } from '@tanstack/react-query';

export const invalidateQueries = async (
	queryClient: QueryClient,
	queries: QueryKey[],
) =>
	await Promise.all(
		queries.map((queryKey) =>
			queryClient.invalidateQueries({
				queryKey: queryKey,
				exact: true,
			}),
		),
	);
