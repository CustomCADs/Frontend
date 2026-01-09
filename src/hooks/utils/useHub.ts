import { DependencyList, useEffect } from 'react';
import * as signalR from '@/lib//hubs/signalr';

type Props = {
	hub: {
		connection?: signalR.HubConnection;
		methods: Array<{
			name: string;
			onReceived: (payload: never) => void | Promise<void>;
		}>;
	};
	condition?: boolean;
	deps?: DependencyList;
};
export const useHub = ({ hub, condition, deps }: Props) =>
	useEffect(() => {
		// if there's a condition and it evaluates to `false`, exit
		if (condition !== undefined && !condition) return;

		if (!hub.connection) return;
		const { connection } = hub;

		for (const method of hub.methods) {
			connection.on(method.name, method.onReceived);
		}
	}, deps);
