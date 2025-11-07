import {
	useQuery,
	type AllNotificationsResponse as Notification,
} from '@customcads/react-sdk';
import { useHub } from '@/hooks/utils/useHub';

export const useNotificationsHub = (
	methodName: 'ReceiveNew',
	onSingleReceived: (payload: Notification) => void | Promise<void>,
) => {
	const { data: account } = useQuery(({ identity }) => identity.myAccount);
	useHub({
		hub: {
			connectionName: 'Notifications',
			methodName: methodName,
			onReceived: onSingleReceived,
		},
		condition: account !== undefined,
		deps: [account?.id],
	});
};
