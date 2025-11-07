import { DependencyList, useEffect, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

const ROW_HEIGHT = 70;
type Props = {
	length: number;
	onEndReached?: { action: VoidFunction; deps?: DependencyList };
};
export const useNotificationVirtualization = ({
	length,
	onEndReached,
}: Props) => {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	const virtualizer = useVirtualizer({
		count: length,
		getScrollElement: () => container,
		estimateSize: () => ROW_HEIGHT,
		overscan: 5,
	});

	useEffect(() => {
		if (!onEndReached || !container) return;
		const viewport = container.querySelector(
			'[data-radix-scroll-area-viewport]',
		);
		const scrollEl = (viewport as HTMLDivElement) ?? container;

		const handleScroll = () => {
			const nearBottom =
				scrollEl.scrollTop + scrollEl.clientHeight >=
				scrollEl.scrollHeight - ROW_HEIGHT;

			if (nearBottom) onEndReached.action();
		};
		scrollEl.addEventListener('scroll', handleScroll);

		return () => scrollEl.removeEventListener('scroll', handleScroll);
	}, [container, virtualizer, length, ...(onEndReached?.deps ?? [])]);

	return { setContainer, instance: virtualizer };
};
