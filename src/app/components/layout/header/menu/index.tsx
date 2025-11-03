import { MenuIcon } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import Content from './content';

const Sidebar = () => {
	return (
		<DropdownMenu>
			<div className='cursor-pointer'>
				<DropdownMenuTrigger asChild>
					<MenuIcon />
				</DropdownMenuTrigger>
				<Content />
			</div>
		</DropdownMenu>
	);
};

export default Sidebar;
