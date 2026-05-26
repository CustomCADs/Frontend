import { Link } from '@tanstack/react-router';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { Menu, MenuItem, MenuButton } from '@/app/components/ui/sidebar';
import { Item } from '.';

type Props = {
	items: Array<Item & { isActive?: boolean; badge?: string }>;
};
const NavMain = ({ items }: Props) => {
	const tHeader = useLayoutTranslations('header');

	return (
		<Menu>
			{items.map((item) => (
				<MenuItem key={item.name}>
					<MenuButton asChild isActive={item.isActive}>
						<Link to={item.url}>
							<item.icon
								style={{ width: '20px', height: '20px' }}
							/>
							<span className='text-lg'>
								{tHeader(item.name)}
							</span>
						</Link>
					</MenuButton>
				</MenuItem>
			))}
		</Menu>
	);
};

export default NavMain;
