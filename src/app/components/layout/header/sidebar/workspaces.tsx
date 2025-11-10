import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/app/components/ui/collapsible';
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from '@/app/components/ui/sidebar';
import { Item } from './content';

type NavWorkspacesProps = {
	items: Array<{ name: Item['name']; pages: Item[] }>;
};
const NavWorkspaces = ({ items }: NavWorkspacesProps) => {
	const tHeader = useLayoutTranslations('header');
	if (!items.length) return;

	return (
		<SidebarGroup>
			<SidebarGroupLabel className='text-md'>
				{tHeader('collections')}
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<Collapsible key={item.name}>
							<SidebarMenuItem>
								<CollapsibleTrigger asChild>
									<SidebarMenuAction
										className='bg-sidebar-accent text-sidebar-accent-foreground left-2 data-[state=open]:rotate-90'
										showOnHover
									>
										<ChevronRight />
									</SidebarMenuAction>
								</CollapsibleTrigger>
								<CollapsibleTrigger>
									<SidebarMenuButton>
										<span className='ms-8 text-lg'>
											{tHeader(item.name)}
										</span>
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.pages.map((page) => (
											<SidebarMenuSubItem key={page.name}>
												<SidebarMenuSubButton asChild>
													<Link to={page.url}>
														<span>
															<page.icon />
														</span>
														<span>
															{tHeader(page.name)}
														</span>
													</Link>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default NavWorkspaces;
