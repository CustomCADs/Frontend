import { useEffect, useState } from 'react';

export const useMinimumLoadingTime = (
	isLoading: boolean,
	minDelay: number = 500,
) => {
	const [shouldShowLoading, setShouldShowLoading] = useState(true);

	useEffect(() => {
		if (!isLoading) {
			const timer = setTimeout(() => {
				setShouldShowLoading(false);
			}, minDelay);
			return () => clearTimeout(timer);
		}

		setShouldShowLoading(true);
	}, [isLoading, minDelay]);

	return isLoading || shouldShowLoading;
};
