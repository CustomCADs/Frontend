import { Bell } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/app/components/ui/popover';
import HeaderIcon from '../icon';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import Triangle from './triangle';

const notifications = [
	'notification1',
	'notification2',
	'notification3',
	'notification4',
	'notification5',
	'notification6',
	'notification7',
];
const NotificationsTab = () => {
	const { is } = useAuthStore();
	if (is.guest) return;

	return (
		<Popover>
			<PopoverTrigger>
				<HeaderIcon Icon={Bell} />
			</PopoverTrigger>
			<PopoverContent className='px-2' asChild>
				<ScrollArea className='bg-accent h-78 w-48 top-8 rounded-sm'>
					<Triangle />
					<div className='flex flex-col gap-5'>
						<h4 className='text-md text-center leading-none font-medium'>
							{'Notifications'}
						</h4>
						<div className='flex flex-col gap-3'>
							{notifications.map((notification) => (
								<div
									key={notification}
									className='text-sm text-center border-y-1 py-2 rounded-sm'
								>
									{notification}
								</div>
							))}
						</div>
					</div>
				</ScrollArea>
			</PopoverContent>
		</Popover>
	);
};

export default NotificationsTab;
