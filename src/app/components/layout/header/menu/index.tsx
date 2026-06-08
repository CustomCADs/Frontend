import { Link } from '@tanstack/react-router';
import { MenuIcon } from 'lucide-react';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import { navMenu, Separator } from '@/app/components/ui';
import { useItems } from './hooks/useItems';

const Content = () => {
	const tHeader = useLayoutTranslations('header');

	const { titleKey, items } = useItems();
	if (!items.length) return null;

	return (
		<navMenu.Root>
			<navMenu.Item>
				<navMenu.Trigger
					className='h-6 p-0 bg-header hover:bg-header data-[state=open]:hover:bg-header'
					asChild
				>
					<MenuIcon />
				</navMenu.Trigger>
				<navMenu.Content className='min-w-40 text-nowrap text-center'>
					<label>{tHeader(titleKey)}</label>
					<Separator className='h-[1.5px]' />
					{items.map((group, i) => (
						<div key={i} className='pt-3'>
							{group.map(({ link, textKey }) => (
								<navMenu.Link
									key={textKey}
									asChild
									className='hover:bg-header-accent'
								>
									<Link to={link}>
										<navMenu.Item>
											{tHeader(textKey)}
										</navMenu.Item>
									</Link>
								</navMenu.Link>
							))}
						</div>
					))}
				</navMenu.Content>
			</navMenu.Item>
		</navMenu.Root>
	);
};
export default Content;
