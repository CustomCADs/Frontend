import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { AllNotificationsResponse } from '@customcads/react-sdk';
import { useNotificationSync } from '@/app/hooks/features/notifications/useNotificationSync';
import * as dateTime from '@/app/utils/date-time';

type Props = { notification: AllNotificationsResponse };
const NotificationItem = ({ notification }: Props) => {
	const { read, open } = useNotificationSync({ notification });
	useEffect(() => {
		read();
	}, []);

	const Wrapper = !!notification.link ? Link : 'div';
	return (
		<div
			className='flex flex-col text-sm border-y-1 my-2 rounded-md'
			onClick={open}
		>
			<Wrapper
				to={notification.link}
				className='flex text-center px-1 py-3'
			>
				{notification.status === 'Unread' && (
					<span className='self-center w-2 h-1.5 rounded-full bg-unread' />
				)}
				<span className='font-medium'>{notification.description}</span>
			</Wrapper>
			<span className='text-right italic px-2 py-1 text-sm text-popover-foreground bg-gradient-to-r from-transparent to-popover rounded-md'>
				{dateTime.formatRelative({ date: notification.createdAt })}
			</span>
		</div>
	);
};

export default NotificationItem;
