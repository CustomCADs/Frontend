import { Loader } from 'lucide-react';
import { AllNotificationsResponse } from '@customcads/react-sdk';
import { useNotificationVirtualization } from '@/app/hooks/features/notifications/useNotificationVirtualization';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { PopoverContent } from '@/app/components/ui/popover';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import Triangle from './triangle';
import NotificationItem from './item';

type ContentProps = {
	notifications: AllNotificationsResponse[];
	nextPage: {
		exists: boolean;
		isFetching: boolean;
		fetch: VoidFunction;
	};
};
const Content = ({ notifications, nextPage }: ContentProps) => {
	const virtualizer = useNotificationVirtualization({
		length: nextPage.exists
			? notifications.length + 1
			: notifications.length,
		onEndReached: {
			action: () => {
				if (nextPage.exists && !nextPage.isFetching) {
					nextPage.fetch();
				}
			},
			deps: [nextPage],
		},
	});
	const tHeader = useLayoutTranslations('header');

	const items = virtualizer.instance
		.getVirtualItems()
		.map(({ key, start, index }) => (
			<li
				key={key}
				data-index={index}
				ref={virtualizer.instance.measureElement}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					transform: `translateY(${start}px)`,
					cursor: 'default',
				}}
			>
				{index > notifications.length - 1 ? (
					<div className='flex justify-center py-3 text-sm text-muted-foreground'>
						<Loader />
					</div>
				) : (
					<NotificationItem
						key={notifications[index].id}
						notification={notifications[index]}
					/>
				)}
			</li>
		));

	return (
		<PopoverContent className='px-2' asChild>
			<ScrollArea
				viewportRef={virtualizer.setContainer}
				className='bg-header-popover h-80 w-60 top-8 rounded-sm'
			>
				<Triangle />
				<div className='flex flex-col gap-3'>
					<h4 className='text-md text-center leading-none font-extrabold'>
						{tHeader('notifications')}
					</h4>

					<div className='relative w-full overflow-y-auto'>
						<ul
							style={{
								height: `${virtualizer.instance.getTotalSize()}px`,
								position: 'relative',
							}}
						>
							{items}
						</ul>
					</div>
				</div>
			</ScrollArea>
		</PopoverContent>
	);
};

export default Content;
