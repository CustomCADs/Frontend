import { useQueryClient } from '@tanstack/react-query';
import {
	type AllNotificationsRequest,
	type AllNotificationsResponse,
	type ApiResult,
	type NotificationStatsResponse,
	queries,
} from '@customcads/react-sdk';
import { query } from '@/lib/utils';

type Props = {
	params: { all: AllNotificationsRequest };
};
export const useNotificationQueryData = ({ params }: Props) => {
	const keys = {
		all: queries.notifications.all(params.all).queryKey,
		stats: queries.notifications.stats.queryKey,
	};
	const queryClient = useQueryClient();

	return {
		all: {
			add: async (notification: AllNotificationsResponse) => {
				type ApiResponse = ApiResult<AllNotificationsResponse>;
				type InfiniteResponse = {
					pages: ApiResponse[];
					pageParams: number[];
				};

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
						if (
							!oldFirstPage.items.some(
								(x) => x.id === notification.id,
							)
						) {
							insert(newFirstPage); // insert new notification in new page
						}

						return {
							pages: [newFirstPage, ...restOfPages],
							pageParams: prev.pageParams,
						};
					},
				);
			},
		},
		stats: {
			increment: async () => {
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
					(
						prev: NotificationStatsResponse,
					): NotificationStatsResponse =>
						toIncrementedUnread(prev ? prev : defaultStats),
				);
			},
		},
		invalidate: () => query.invalidate(queryClient, [keys.all, keys.stats]),
	};
};
