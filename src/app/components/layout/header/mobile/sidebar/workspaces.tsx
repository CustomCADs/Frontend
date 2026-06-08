import { Link } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { collapsible, sidebar } from '@/app/components/ui';
import { Item } from '.';

type Props = {
	items: Array<{ name: Item['name']; pages: Item[] }>;
};
const NavWorkspaces = ({ items }: Props) => {
	const tHeader = useLayoutTranslations('header');
	if (!items.length) return;

	return (
		<sidebar.Group>
			<sidebar.GroupLabel className='text-md'>
				{tHeader('collections')}
			</sidebar.GroupLabel>
			<sidebar.GroupContent>
				<sidebar.Menu>
					{items.map((item) => (
						<collapsible.Root key={item.name}>
							<sidebar.MenuItem>
								<collapsible.Trigger asChild>
									<sidebar.MenuAction
										className='bg-sidebar-accent text-sidebar-accent-foreground left-2 data-[state=open]:rotate-90'
										showOnHover
									>
										<ChevronRight />
									</sidebar.MenuAction>
								</collapsible.Trigger>
								<collapsible.Trigger asChild>
									<sidebar.MenuButton>
										<span className='ms-8 text-lg'>
											{tHeader(item.name)}
										</span>
									</sidebar.MenuButton>
								</collapsible.Trigger>
								<collapsible.Content>
									<sidebar.MenuSub>
										{item.pages.map((page) => (
											<sidebar.MenuSubItem
												key={page.name}
											>
												<sidebar.MenuSubButton asChild>
													<Link to={page.url}>
														<span>
															<page.icon />
														</span>
														<span>
															{tHeader(page.name)}
														</span>
													</Link>
												</sidebar.MenuSubButton>
											</sidebar.MenuSubItem>
										))}
									</sidebar.MenuSub>
								</collapsible.Content>
							</sidebar.MenuItem>
						</collapsible.Root>
					))}
				</sidebar.Menu>
			</sidebar.GroupContent>
		</sidebar.Group>
	);
};

export default NavWorkspaces;
