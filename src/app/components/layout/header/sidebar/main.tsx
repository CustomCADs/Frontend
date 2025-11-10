import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/app/components/ui/sidebar';
import { Item } from './content';

type NavMainProps = {
	items: Array<Item & { isActive?: boolean; badge?: string }>;
};
const NavMain = ({ items }: NavMainProps) => {
	const tHeader = useLayoutTranslations('header');

	return (
		<SidebarMenu>
			{items.map((item) => (
				<SidebarMenuItem key={item.name}>
					<SidebarMenuButton asChild isActive={item.isActive}>
						<Link to={item.url}>
							<item.icon
								style={{ width: '20px', height: '20px' }}
							/>
							<span className='text-lg'>
								{tHeader(item.name)}
							</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);
};

export default NavMain;
