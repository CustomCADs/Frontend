import { Link } from '@tanstack/react-router';
import { TITLE } from '@/app/constants/global';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/app/components/ui/sidebar';
import { Separator } from '@/app/components/ui/separator';
import Content from './content';

const Sidebar = () => (
	<SidebarProvider>
		<Content />
		<SidebarInset>
			<header className='flex bg-background sticky top-0 h-14 shrink-0 items-center gap-2'>
				<div className='flex flex-1 items-center gap-2 px-3'>
					<SidebarTrigger />
					<Separator
						orientation='vertical'
						className='mr-2 data-[orientation=vertical]:h-4'
					/>
					<Link
						to='/'
						className='basis-full leading-none text-2xl text-center font-extrabold'
					>
						{TITLE}
					</Link>
				</div>
			</header>
		</SidebarInset>
	</SidebarProvider>
);

export default Sidebar;
