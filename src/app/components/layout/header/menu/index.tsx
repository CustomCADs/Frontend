import { Link } from '@tanstack/react-router';
import { MenuIcon } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import * as NavMenu from '@/app/components/ui/navmenu';
import { Separator } from '@/app/components/ui/separator';
import { useItems } from './hooks/useItems';

const Content = () => {
	const tHeader = useLayoutTranslations('header');

	const { titleKey, items } = useItems();
	if (!items.length) return null;

	return (
		<NavMenu.Root>
			<NavMenu.Item>
				<NavMenu.Trigger
					className='h-6 p-0 bg-header hover:bg-header data-[state=open]:hover:bg-header'
					asChild
				>
					<MenuIcon />
				</NavMenu.Trigger>
				<NavMenu.Content className='min-w-40 text-nowrap text-center'>
					<label>{tHeader(titleKey)}</label>
					<Separator className='h-[1.5px]' />
					{items.map((group, i) => (
						<div key={i} className='pt-3'>
							{group.map(({ link, textKey }) => (
								<NavMenu.Link
									key={textKey}
									asChild
									className='hover:bg-header-accent'
								>
									<Link to={link}>
										<NavMenu.Item>
											{tHeader(textKey)}
										</NavMenu.Item>
									</Link>
								</NavMenu.Link>
							))}
						</div>
					))}
				</NavMenu.Content>
			</NavMenu.Item>
		</NavMenu.Root>
	);
};
export default Content;
