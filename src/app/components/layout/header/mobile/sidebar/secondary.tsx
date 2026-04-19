import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
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
					<Account />
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default NavSecondary;
