import { Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils/tailwindcss';
import { useInfoTranslations } from '@/app/hooks/locales/translations/pages/public';
import CustomIcon from '@/app/components/icon';
import * as dialog from '@/app/components/ui/dialog';
import * as preferences from '@/app/components/preferences';

const Preferences = ({ text }: { text?: string }) => {
	const tPreferences = useInfoTranslations('preferences');

	return (
		<dialog.Dialog>
			<dialog.DialogTrigger>
				<CustomIcon Icon={Settings2} text={text} />
			</dialog.DialogTrigger>
			<dialog.DialogContent
				className={cn(
					'w-5/6 md:w-auto py-20 md:p-16 rounded-3xl',
					'flex flex-col justify-center items-center',
					'bg-accent text-accent-foreground',
				)}
			>
				<div>
					<div className='flex flex-col gap-y-8 text-lg'>
						<div className='flex gap-x-4'>
							<span>{tPreferences('theme')}</span>
							<preferences.ThemeToggle />
						</div>
						<div className='flex gap-x-4'>
							<span>{tPreferences('language')}</span>
							<preferences.LanguageMenu
								placeholder={tPreferences(
									'language-placeholder',
								)}
							/>
						</div>
						<div className='flex gap-x-4'>
							<span>{tPreferences('currency')}</span>
							<preferences.CurrencySelector
								placeholder={tPreferences(
									'currency-placeholder',
								)}
							/>
						</div>
					</div>
				</div>
			</dialog.DialogContent>
		</dialog.Dialog>
	);
};

export default Preferences;
