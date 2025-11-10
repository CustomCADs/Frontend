import { Link } from '@tanstack/react-router';
import { ShoppingCart, UserCircle } from 'lucide-react';
import { TITLE } from '@/app/constants/global';
import { useAuthStore } from '@/app/hooks/stores/useAuthStore';
import CustomIcon from '@/app/components/icon';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/app/components/ui/sidebar';
import Content from './content';
import NotificationsTab from '../notifications';
import data from './data';

const Sidebar = () => {
	const { is } = useAuthStore();

	return (
		<SidebarProvider>
			<Content
				main={data.main}
				collections={data.getCollections(is)}
				workspaces={data.getWorkspaces(is)}
			/>
			<SidebarInset>
				<header className='flex bg-header text-header-foreground sticky top-0 h-14 shrink-0 items-center gap-2 py-3 transition-colors duration-400'>
					<div className='h-full w-full flex justify-between items-center px-6'>
						<div className='flex gap-x-4'>
							<SidebarTrigger />
							{!is.guest && (
								<CustomIcon Icon={UserCircle} to='.' />
							)}
						</div>
						<Link
							to='/'
							className='absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-2xl text-center font-extrabold'
						>
							{TITLE}
						</Link>
						<div className='flex gap-x-4'>
							<NotificationsTab />
							<CustomIcon Icon={ShoppingCart} to='.' />
						</div>
					</div>
				</header>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default Sidebar;
