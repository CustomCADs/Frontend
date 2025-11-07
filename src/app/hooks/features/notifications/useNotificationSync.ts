import { useMutation } from '@customcads/react-sdk';
import { useNotificationStatus } from './useNotificationStatus';

type Props = {
	notification: { id: string; status: string };
};
export const useNotificationSync = ({ notification }: Props) => {
	const { mutateAsync: readAsync } = useMutation(
		({ notifications }) => notifications.read,
	);
	const read = useNotificationStatus({
		initial: notification.status === 'Read',
		callback: {
			condition: notification.status === 'Unread',
			action: async () => await readAsync({ id: notification.id }),
		},
	});

	const { mutateAsync: openAsync } = useMutation(
		({ notifications }) => notifications.open,
	);
	const open = useNotificationStatus({
		initial: notification.status === 'Opened',
		callback: {
			condition: notification.status === 'Read',
			action: async () => await openAsync({ id: notification.id }),
		},
	});

	return { read, open };
};
