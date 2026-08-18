import {
	useQuery,
	type AllNotificationsResponse as Notification,
} from '@customcads/react-sdk';
import { useHub } from '@/hooks/utils/useHub';
import * as hubs from '@/lib/hubs';

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
			...hubs.connect('Notifications'),
			methodsToAdd: [{ name: methodName, onReceived: onSingleReceived }],
		},
		condition: !!authn && !!account,
		deps: [account?.id],
	});
};
