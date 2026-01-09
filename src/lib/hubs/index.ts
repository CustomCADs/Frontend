import * as signalr from './signalr';

export type Name = 'Notifications';
export type Hub = { name: Name; connection: signalr.HubConnection };
let hubs: Hub[] = [];

const create = (name: Name) => {
	const hub: Hub = { name, connection: signalr.buildConnection(name) };

	hubs.push(hub);
	signalr.start(hub.connection);

	return hub;
};

export const remove = (hub: Hub) => {
	hubs = hubs.filter((x) => x.name !== hub.name);
	signalr.stop(hub.connection);
};

export const connect = (name: Name) => {
	const hub = hubs.find((x) => x.name === name);

	if (!hub) return create(name).connection;
	return hub.connection;
};
