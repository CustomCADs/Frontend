import * as signalR from '@microsoft/signalr';

export type HubConnection = signalR.HubConnection;

export const buildConnection = (hub: string) =>
	new signalR.HubConnectionBuilder()
		.withUrl(`${import.meta.env.VITE_API_URL}/SignalR/${hub}`)
		.withAutomaticReconnect()
		.build();

export const start = async (connection: signalR.HubConnection) => {
	try {
		await connection.start();
	} catch {
		setTimeout(() => start(connection), 5000);
	}
};

export const stop = async (connection: signalR.HubConnection) =>
	await connection.stop();
