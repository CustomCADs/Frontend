import { toast } from 'sonner';
import { AllNotificationsRequest, useMutation } from '@customcads/react-sdk';
import { useNotificationsHub } from '@/app/hooks/hubs/useNotificationHub';
import { useNotificationQueryData } from './useNotificationQueryData';

export const useLiveNotifications = (allParams: AllNotificationsRequest) => {
	const queries = useNotificationQueryData({
		params: { all: allParams },
	});
	const { mutateAsync: read } = useMutation(
		({ notifications }) => notifications.read,
	);

	const raiseToast = (id: string, description: string) => {
		const onRead = () => {
			read({ id });
			queries.invalidate();
		};

		toast(description, {
			action: { label: 'Read', onClick: onRead },
		});
	};

	useNotificationsHub('ReceiveNew', async (notification) => {
		await queries.all.add(notification);
		await queries.stats.increment();
		await queries.invalidate();
		raiseToast(notification.id, notification.description);
	});
};
