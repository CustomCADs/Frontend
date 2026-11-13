import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import {
	Group,
	GroupLabel,
	Menu,
	MenuItem,
	MenuButton,
} from '@/app/components/ui/sidebar';
import { Item } from './';

type Props = { group: Item['name']; items: Item[] };
const NavCollections = ({ group, items }: Props) => {
	const tHeader = useLayoutTranslations('header');
	if (!items.length) return;

	return (
		<Group className='group-data-[collapsible=icon]:hidden'>
			<GroupLabel>{tHeader(group)}</GroupLabel>
			<Menu>
				{items.map((item) => (
					<MenuItem key={item.name}>
						<MenuButton asChild>
							<Link to={item.url} title={item.name}>
								<span>
									<item.icon />
								</span>
								<span>{tHeader(item.name)}</span>
							</Link>
						</MenuButton>
					</MenuItem>
				))}
			</Menu>
		</Group>
	);
};

export default NavCollections;
