import { LinkProps } from '@tanstack/react-router';
import { type LucideIcon } from 'lucide-react';
import { TITLE } from '@/app/constants/global';
import { type Header } from '@/app/locales/types/components/layout';
import { sidebar } from '@/app/components/ui';
import NavMain from './main';
import NavCollections from './collections';
import NavWorkspaces from './workspaces';
import NavSecondary from './secondary';

export type Item = {
	name: keyof Header;
	url: LinkProps['to'];
	icon: LucideIcon;
};

export type Props = {
	main: React.ComponentProps<typeof NavMain>['items'];
	collections: React.ComponentProps<typeof NavCollections>['items'];
	workspaces: React.ComponentProps<typeof NavWorkspaces>['items'];
};
const Sidebar = ({ main, collections, workspaces }: Props) => (
	<sidebar.Root className='border-r-0'>
		<sidebar.Header>
			<div className='flex flex-col items-center pb-10'>
				<img src='/logo.png' className='w-30 h-30' />
				<span className='text-2xl font-extrabold'>{TITLE}</span>
			</div>
			<NavMain items={main} />
		</sidebar.Header>
		<sidebar.Content>
			<NavCollections items={collections} />
			<NavWorkspaces items={workspaces} />
			<NavSecondary items={[]} className='mt-auto' />
		</sidebar.Content>
		<sidebar.Rail />
	</sidebar.Root>
);

export default Sidebar;
