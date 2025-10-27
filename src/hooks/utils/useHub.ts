import { DependencyList, useEffect } from 'react';
import * as signalR from '@/lib//hubs/signalr';

type UseHubProps = {
	hub: {
		connectionName: 'Notifications';
		methodName: string;
		onReceived: (payload: never) => void | Promise<void>;
	};
	condition?: boolean;
	deps?: DependencyList;
};
export const useHub = ({ hub, condition, deps }: UseHubProps) =>
	useEffect(() => {
		if (condition === undefined || condition) {
			const connection = signalR.buildConnection(hub.connectionName);

			const init = async () => {
				connection.on(hub.methodName, hub.onReceived);
				await signalR.start(connection);
			};
			init();

			return () => {
				signalR.stop(connection);
			};
		}
	}, deps);
