import { Bell } from 'lucide-react';
import { useInfiniteQuery } from '@customcads/react-sdk';
import { useNotificationRealTime } from '@/app/hooks/features/notifications/useNotificationRealTime';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import { popover } from '@/app/components/ui';
import CustomIcon from '@/app/components/icon';
import Scroll from './scroll';

const ALL_PARAMS = { page: 1, limit: 10 };
const bell = <CustomIcon Icon={Bell} />;

const NotificationsTab = () => {
	const { is } = useAuthStore();
	const query = useInfiniteQuery(
		({ notifications }) => notifications.all(ALL_PARAMS),
		!is.guest,
	);
	useNotificationRealTime({ allParams: ALL_PARAMS });

	if (is.guest) return;
	if (!query.data) return bell;
	const { pages } = query.data;

	return (
		<popover.Root>
			<popover.Trigger>{bell}</popover.Trigger>
			<popover.Content className='px-2 w-auto md:w-auto' asChild>
				<div className='relative top-4 flex flex-col items-center'>
					<Scroll
						notifications={pages.flatMap(({ items }) => items)}
						nextPage={{
							exists: query.hasNextPage,
							isFetching: query.isFetchingNextPage,
							fetch: query.fetchNextPage,
						}}
					/>
				</div>
			</popover.Content>
		</popover.Root>
	);
};

export default NotificationsTab;
