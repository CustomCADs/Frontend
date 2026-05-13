import React, { useEffect, useState } from 'react';
import * as ui from '@/app/components/ui/tabs';
import { Card } from './ui/card';

type Props<Tab> = React.ComponentProps<typeof ui.Tabs> & {
	tabs: readonly {
		id: Tab;
		header: React.ReactNode;
		ui: {
			label: string;
			panel: React.ReactNode;
		};
		footer: React.ReactNode;
		className: string;
	}[];
	defaultTab?: Tab;
	onTabChange?: (tab: Tab) => void;
	tabVariant?: React.ComponentProps<typeof ui.TabsList>['variant'];
};
// eslint-disable-next-line func-style
function Tabs<Tab extends string>({
	tabs,
	defaultTab,
	onTabChange,
	tabVariant,
	...props
}: Props<Tab>) {
	const [tab, setTab] = useState<Tab>(defaultTab ?? tabs[0].id);

	useEffect(() => {
		const timer = setTimeout(() => {
			onTabChange?.(tab);
		}, 1000);
		return () => clearTimeout(timer);
	}, [tab]);

	return (
		<ui.Tabs
			value={tab}
			onValueChange={(tab) => setTab(tab as Tab)}
			{...props}
		>
			<ui.TabsList className='w-full md:w-auto' variant={tabVariant}>
				{tabs.map(({ id, ui: { label }, className }) => (
					<ui.TabsTrigger key={id} value={id} className={className}>
						{label}
					</ui.TabsTrigger>
				))}
			</ui.TabsList>
			{tabs.map(({ id, header, ui: { panel }, footer }) => (
				<ui.TabsContent key={id} value={id}>
					<Card className='min-h-140 pt-4 flex flex-col gap-y-0'>
						{header}
						{panel}
						{footer}
					</Card>
				</ui.TabsContent>
			))}
		</ui.Tabs>
	);
}

export default Tabs;
