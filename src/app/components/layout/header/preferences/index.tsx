import { Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';
import CustomIcon from '@/app/components/icon';
import { sheet } from '@/app/components/ui';
import * as preferences from '@/app/components/preferences';

const Preferences = ({ text }: { text?: string }) => {
	const tPreferences = useInfoTranslations('preferences');

	return (
		<sheet.Root>
			<sheet.Trigger>
				<CustomIcon Icon={Settings2} text={text} />
			</sheet.Trigger>
			<sheet.Content
				className={cn(
					'w-5/6 md:w-auto py-20 md:p-16 rounded-3xl',
					'flex flex-col justify-center items-center gap-y-12',
					'bg-accent text-accent-foreground text-lg',
				)}
			>
				<div className='flex gap-x-4'>
					<span>{tPreferences('theme')}</span>
					<preferences.ThemeToggle />
				</div>
				<div className='flex gap-x-4'>
					<span>{tPreferences('language')}</span>
					<preferences.LanguageMenu
						placeholder={tPreferences('language-placeholder')}
					/>
				</div>
				<div className='flex gap-x-4'>
					<span>{tPreferences('currency')}</span>
					<preferences.CurrencySelector
						placeholder={tPreferences('currency-placeholder')}
					/>
				</div>
			</sheet.Content>
		</sheet.Root>
	);
};

export default Preferences;
