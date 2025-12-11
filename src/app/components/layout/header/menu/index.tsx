import { Link } from '@tanstack/react-router';
import { MenuIcon } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from '@/app/components/ui/dropdown-menu';
import { useItems } from './hooks/useItems';

const Content = () => {
	const tHeader = useLayoutTranslations('header');

	const { titleKey, items } = useItems();
	if (!items.length) return null;

	return (
		<DropdownMenu>
			<div className='cursor-pointer'>
				<DropdownMenuTrigger asChild>
					<MenuIcon />
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>{tHeader(titleKey)}</DropdownMenuLabel>
					<DropdownMenuSeparator className='h-[1.5px]' />
					{items.map((group, i) => (
						<>
							<DropdownMenuGroup>
								{group.map(({ link, textKey }) => (
									<Link key={textKey} to={link}>
										<DropdownMenuItem>
											{tHeader(textKey)}
										</DropdownMenuItem>
									</Link>
								))}
							</DropdownMenuGroup>
							{i !== items.length - 1 && (
								<DropdownMenuSeparator />
							)}
						</>
					))}
				</DropdownMenuContent>
			</div>
		</DropdownMenu>
	);
};
export default Content;
