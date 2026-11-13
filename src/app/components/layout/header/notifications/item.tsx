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
			className='flex flex-col text-sm border-y mx-1 my-1 rounded-xl hover:bg-card transition duration-250'
			onClick={open}
		>
			<Wrapper
				to={notification.link ?? undefined}
				className='flex text-center px-3 py-4'
			>
				{notification.status === 'Unread' && (
					<span className='self-center w-2 h-1.5 rounded-full bg-unread' />
				)}
				<span className='font-medium'>{notification.description}</span>
			</Wrapper>
			<span className='text-right italic px-2 py-1 text-xs text-muted-foreground rounded-md'>
				{dateTime.formatRelative({ date: notification.createdAt })}
			</span>
		</div>
	);
};

export default NotificationItem;
