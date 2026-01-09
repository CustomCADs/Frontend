import { LinkProps } from '@tanstack/react-router';
import { type LucideIcon } from 'lucide-react';
import { OnlyParam } from '@/lib/utils/typescript';
import { TITLE } from '@/app/constants/global';
import { Header } from '@/app/locales/types/components/layout';
import {
	Sidebar as SidebarUI,
	SidebarContent,
	SidebarHeader,
	SidebarRail,
} from '@/app/components/ui/sidebar';
import NavMain from './main';
import NavCollections from './collections';
import NavWorkspaces from './workspaces';
import NavSecondary from './secondary';

export type Item = {
	name: keyof Header;
	url: LinkProps['to'];
	icon: LucideIcon;
};

export type SidebarProps = {
	main: OnlyParam<typeof NavMain>['items'];
	collections: OnlyParam<typeof NavCollections>['items'];
	workspaces: OnlyParam<typeof NavWorkspaces>['items'];
};
const Sidebar = ({ main, collections, workspaces }: SidebarProps) => (
	<SidebarUI className='border-r-0'>
		<SidebarHeader>
			<div className='flex flex-col items-center pb-10'>
				<img src='/logo.png' className='w-30 h-30' />
				<span className='text-2xl font-extrabold'>{TITLE}</span>
			</div>
			<NavMain items={main} />
		</SidebarHeader>
		<SidebarContent>
			<NavCollections items={collections} />
			<NavWorkspaces items={workspaces} />
			<NavSecondary items={[]} className='mt-auto' />
		</SidebarContent>
		<SidebarRail />
	</SidebarUI>
);

export default Sidebar;
