import * as signalr from './signalr';

export type Name = 'Notifications';
export type Hub = {
	name: Name;
	connection: signalr.HubConnection;
	methods: string[];
};

let hubs: Hub[] = [];

const create = (name: Name) => {
	const hub: Hub = {
		name,
		connection: signalr.buildConnection(name),
		methods: [],
	};

	hubs.push(hub);
	signalr.start(hub.connection);

	return hub;
};

export const remove = (hub: Hub) => {
	hubs = hubs.filter((x) => x.name !== hub.name);
	signalr.stop(hub.connection);
};

export const connect = (name: Name) =>
	hubs.find((x) => x.name === name) ?? create(name);
