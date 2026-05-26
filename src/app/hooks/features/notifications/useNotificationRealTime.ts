import { type AllNotificationsRequest } from '@customcads/react-sdk';
import { useNotificationsHub } from '@/app/hooks/hubs/useNotificationHub';
import { useNotificationQueryData } from './useNotificationQueryData';

type Props = {
	allParams: AllNotificationsRequest;
};
export const useNotificationRealTime = ({ allParams }: Props) => {
	const queries = useNotificationQueryData({
		params: { all: allParams },
	});

	useNotificationsHub('ReceiveNew', async (notification) => {
		await queries.all.add(notification);
		await queries.stats.increment();
		await queries.invalidate();
	});
};
