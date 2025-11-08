import { Bell } from 'lucide-react';
import { useInfiniteQuery } from '@customcads/react-sdk';
import { useNotificationRealTime } from '@/app/hooks/features/notifications/useNotificationRealTime';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { Popover, PopoverTrigger } from '@/app/components/ui/popover';
import CustomIcon from '@/app/components/icon';
import Content from './content';

const ALL_PARAMS = { limit: 10 };
const NotificationsTab = () => {
	const { is } = useAuthStore();
	const query = useInfiniteQuery(
		({ notifications }) => notifications.all(ALL_PARAMS),
		!is.guest,
	);
	useNotificationRealTime({ allParams: ALL_PARAMS });

	if (is.guest) return;
	if (!query.data) return <CustomIcon Icon={Bell} />;
	const { pages } = query.data;

	return (
		<Popover>
			<PopoverTrigger>
				<CustomIcon Icon={Bell} />
			</PopoverTrigger>
			<Content
				notifications={pages.flatMap(({ items }) => items)}
				nextPage={{
					exists: query.hasNextPage,
					isFetching: query.isFetchingNextPage,
					fetch: query.fetchNextPage,
				}}
			/>
		</Popover>
	);
};

export default NotificationsTab;
