import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import Account from '../account';
import {
	Group,
	GroupContent,
	Menu,
	MenuItem,
	MenuButton,
	MenuBadge,
} from '@/app/components/ui/sidebar';
import { Item } from '.';

type Props = React.ComponentPropsWithoutRef<typeof Group> & {
	items: Array<Item & { badge?: string }>;
};
const NavSecondary = ({ items, ...props }: Props) => {
	const tHeader = useLayoutTranslations('header');

	return (
		<Group {...props}>
			<GroupContent>
				<Menu>
					{items.map((item) => (
						<MenuItem key={item.name}>
							<MenuButton asChild>
								<Link to={item.url}>
									<item.icon />
									<span>{tHeader(item.name)}</span>
								</Link>
							</MenuButton>
							{item.badge && <MenuBadge>{item.badge}</MenuBadge>}
						</MenuItem>
					))}
					<Account />
				</Menu>
			</GroupContent>
		</Group>
	);
};

export default NavSecondary;
