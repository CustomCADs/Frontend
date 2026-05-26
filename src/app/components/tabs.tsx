import React, { useEffect, useState } from 'react';
import { ClassName } from '@/types/react';
import { tabs as ui } from '@/app/components/ui';
import { Root as Card } from './ui/card';

type Tab<T> = ClassName & {
	id: T;
	header: React.ReactNode;
	ui: {
		label: string;
		panel: React.ReactNode;
	};
	footer: React.ReactNode;
};

type Props<T> = React.ComponentProps<typeof ui.Root> & {
	tabs: readonly Tab<T>[];
	defaultTab?: T;
	onTabChange?: (tab: T) => void;
	tabVariant?: React.ComponentProps<typeof ui.List>['variant'];
};
// eslint-disable-next-line func-style
function Tabs<T extends string>({
	tabs,
	defaultTab,
	onTabChange,
	tabVariant,
	...props
}: Props<T>) {
	const [tab, setTab] = useState<T>(defaultTab ?? tabs[0].id);

	useEffect(() => {
		const timer = setTimeout(() => {
			onTabChange?.(tab);
		}, 1000);
		return () => clearTimeout(timer);
	}, [tab]);

	return (
		<ui.Root
			value={tab}
			onValueChange={(tab) => setTab(tab as T)}
			{...props}
		>
			<ui.List className='w-full md:w-auto' variant={tabVariant}>
				{tabs.map(({ id, ui: { label }, className }) => (
					<ui.Trigger key={id} value={id} className={className}>
						{label}
					</ui.Trigger>
				))}
			</ui.List>
			{tabs.map(({ id, header, ui: { panel }, footer }) => (
				<ui.Content key={id} value={id}>
					<Card className='min-h-140 pt-4 flex flex-col gap-y-0'>
						{header}
						{panel}
						{footer}
					</Card>
				</ui.Content>
			))}
		</ui.Root>
	);
}

export default Tabs;
