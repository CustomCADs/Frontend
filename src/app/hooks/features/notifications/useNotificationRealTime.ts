import { queries } from '@customcads/react-sdk';
import { OnlyParam } from '@/lib/utils/typescript';
import { useNotificationsHub } from '@/app/hooks/hubs/useNotificationHub';
import { useNotificationQueryData } from './useNotificationQueryData';

type Props = {
	allParams: OnlyParam<typeof queries.notifications.all>;
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
