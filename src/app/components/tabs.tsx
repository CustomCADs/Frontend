import React, { useEffect, useState } from 'react';
import * as ui from '@/app/components/ui/tabs';

type Props<Tab> = React.ComponentProps<typeof ui.Tabs> & {
	tabs: readonly {
		id: Tab;
		label: string;
		className: string;
		panel: React.ReactNode;
	}[];
	defaultTab?: Tab;
	onTabChange?: (tab: Tab) => void;
};
// eslint-disable-next-line func-style
function Tabs<Tab extends string>({
	tabs,
	defaultTab,
	onTabChange,
	...props
}: Props<Tab>) {
	const [tab, setTab] = useState<Tab>(defaultTab ?? tabs[0].id);

	useEffect(() => {
		onTabChange?.(tab);
	}, [tab]);

	return (
		<ui.Tabs
			value={tab}
			onValueChange={(tab) => setTab(tab as Tab)}
			{...props}
		>
			<ui.TabsList className='w-full md:w-auto'>
				{tabs.map(({ id, label, className }) => (
					<ui.TabsTrigger key={id} value={id} className={className}>
						{label}
					</ui.TabsTrigger>
				))}
			</ui.TabsList>
			{tabs.map(({ id, panel }) => (
				<ui.TabsContent key={id} value={id}>
					{panel}
				</ui.TabsContent>
			))}
		</ui.Tabs>
	);
}

export default Tabs;
