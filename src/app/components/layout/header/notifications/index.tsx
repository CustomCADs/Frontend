import { Bell } from 'lucide-react';
import { useInfiniteQuery } from '@customcads/react-sdk';
import { useNotificationRealTime } from '@/app/hooks/features/notifications/useNotificationRealTime';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { Popover, PopoverTrigger } from '@/app/components/ui/popover';
import HeaderIcon from '../icon';
import Content from './content';

const ALL_PARAMS = { limit: 10 };
const NotificationsTab = () => {
	const query = useInfiniteQuery(({ notifications }) =>
		notifications.all(ALL_PARAMS),
	);
	useNotificationRealTime({ allParams: ALL_PARAMS });

	const { is } = useAuthStore();
	if (is.guest) return;

	if (!query.data) return <HeaderIcon Icon={Bell} />;
	const { pages } = query.data;

	return (
		<Popover>
			<PopoverTrigger>
				<HeaderIcon Icon={Bell} />
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
