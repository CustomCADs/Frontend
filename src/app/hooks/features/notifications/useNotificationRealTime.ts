import { useQueryClient } from '@tanstack/react-query';
import {
	AllNotificationsResponse,
	ApiResult,
	NotificationStatsResponse,
	queries,
} from '@customcads/react-sdk';
import { invalidateQueries } from '@/lib/utils/api';
import { OnlyParam } from '@/lib/utils/typescript';
import { useNotificationsHub } from '@/app/hooks/hubs/useNotificationHub';

type UseNotificationRealTimeProps = {
	allParams: OnlyParam<typeof queries.notifications.all>;
};
export const useNotificationRealTime = ({
	allParams,
}: UseNotificationRealTimeProps) => {
	const queryClient = useQueryClient();
	const keys = {
		all: queries.notifications.all(allParams).queryKey,
		stats: queries.notifications.stats.queryKey,
	};

	const updateAllQueryData = async (
		notification: AllNotificationsResponse,
	) => {
		type ApiResponse = ApiResult<AllNotificationsResponse>;
		type InfiniteResponse = { pages: ApiResponse[]; pageParams: number[] };

		const copy = (page: ApiResponse): ApiResponse => ({
			count: page.count,
			items: [...page.items],
		});
		const insert = (page: ApiResponse) => {
			page.count++;
			page.items.unshift(notification);
		};

		await queryClient.setQueryData(
			keys.all,
			(prev: InfiniteResponse): InfiniteResponse => {
				if (!prev) {
					const items = [notification];
					const count = items.length;

					return {
						pages: [{ items, count }],
						pageParams: [count],
					};
				}

				const [oldFirstPage, ...restOfPages] = prev.pages;
				const newFirstPage = copy(oldFirstPage);

				// if new notification not found in old page
				if (!oldFirstPage.items.some((x) => x.id === notification.id)) {
					insert(newFirstPage); // insert new notification in new page
				}

				return {
					pages: [newFirstPage, ...restOfPages],
					pageParams: prev.pageParams,
				};
			},
		);
	};

	const updateStatsQueryData = async () => {
		const defaultStats: NotificationStatsResponse = {
			unread: 1,
			read: 0,
			opened: 0,
			hidden: 0,
		};

		const toIncrementedUnread = (
			stats: NotificationStatsResponse,
		): NotificationStatsResponse => ({
			...stats,
			unread: stats.unread + 1,
		});

		await queryClient.setQueryData(
			keys.stats,
			(prev: NotificationStatsResponse): NotificationStatsResponse =>
				toIncrementedUnread(prev ? prev : defaultStats),
		);
	};

	const invalidateNotificationsQueries = async () => {
		await invalidateQueries(queryClient, [keys.all, keys.stats]);
	};

	useNotificationsHub('ReceiveNew', async (notification) => {
		await updateAllQueryData(notification);
		await updateStatsQueryData();
		await invalidateNotificationsQueries();
	});
};
