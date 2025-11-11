import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/app/components/ui/sidebar';
import { Item } from '.';

type NavCollectionsProps = { items: Item[] };
const NavCollections = ({ items }: NavCollectionsProps) => {
	const tHeader = useLayoutTranslations('header');
	if (!items.length) return;

	return (
		<SidebarGroup className='group-data-[collapsible=icon]:hidden'>
			<SidebarGroupLabel>{tHeader('useful')}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild>
							<Link to={item.url} title={item.name}>
								<span>
									<item.icon />
								</span>
								<span>{tHeader(item.name)}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default NavCollections;
