import { Link } from '@tanstack/react-router';
import { Settings2 } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import CustomIcon from '@/app/components/icon';
import Account from '../account';
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/app/components/ui/sidebar';
import { Item } from '.';

type NavSecondaryProps = { items: Array<Item & { badge?: string }> };
const NavSecondary = ({
	items,
	...props
}: NavSecondaryProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) => {
	const tHeader = useLayoutTranslations('header');

	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.name}>
							<SidebarMenuButton asChild>
								<Link to={item.url}>
									<item.icon />
									<span>{tHeader(item.name)}</span>
								</Link>
							</SidebarMenuButton>
							{item.badge && (
								<SidebarMenuBadge>
									{item.badge}
								</SidebarMenuBadge>
							)}
						</SidebarMenuItem>
					))}
					<SidebarMenuButton>
						<CustomIcon
							Icon={Settings2}
							to='.'
							text={tHeader('settings')}
							className='text-lg hover:text-header-foreground'
						/>
					</SidebarMenuButton>
					<Account />
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default NavSecondary;
