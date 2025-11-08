import {
	useQuery,
	type AllNotificationsResponse as Notification,
} from '@customcads/react-sdk';
import { useHub } from '@/hooks/utils/useHub';

export const useNotificationsHub = (
	methodName: 'ReceiveNew',
	onSingleReceived: (payload: Notification) => void | Promise<void>,
) => {
	const { data: authn } = useQuery(({ identity }) => identity.authn);
	const { data: account } = useQuery(
		({ identity }) => identity.myAccount,
		!!authn,
	);

	useHub({
		hub: {
			connectionName: 'Notifications',
			methods: [{ name: methodName, onReceived: onSingleReceived }],
		},
		condition: authn,
		deps: [account?.id],
	});
};
