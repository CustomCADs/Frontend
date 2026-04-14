import { useConnection } from './useConnection';

export const useRealTime = () => {
	useConnection({ name: 'Notifications' });
};
