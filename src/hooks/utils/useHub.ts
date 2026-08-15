import { DependencyList, useEffect } from 'react';
import { HubConnection } from '@/lib//hubs/signalr';

type Props = {
	hub: {
		connection: HubConnection;
		methods: Array<string>;
		methodsToAdd: {
			name: string;
			onReceived: (payload: never) => void | Promise<void>;
		}[];
	};
	condition?: boolean;
	deps?: DependencyList;
};
export const useHub = ({ hub, condition, deps }: Props) =>
	useEffect(() => {
		// if there's a condition and it evaluates to `false`, exit
		if (condition !== undefined && !condition) return;

		for (const method of hub.methodsToAdd) {
			if (hub.methods.includes(method.name)) return;
			hub.methods.push(method.name);
			hub.connection.on(method.name, method.onReceived);
		}
	}, deps);
