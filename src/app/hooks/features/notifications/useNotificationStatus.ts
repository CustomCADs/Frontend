import { useEffect, useState } from 'react';

type Props = {
	initial: boolean;
	callback: {
		condition: boolean;
		action: () => Promise<void>;
	};
};
export const useNotificationStatus = ({ initial, callback }: Props) => {
	const [isStatus, setIsStatus] = useState(initial);
	useEffect(() => {
		if (callback.condition && isStatus) {
			callback.action();
		}
	}, [callback.condition, isStatus]);

	return () => {
		if (!isStatus) setIsStatus(true);
	};
};
