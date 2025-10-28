import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/app/hooks/stores/useThemeStore';
import { useLayoutTranslations } from '@/app/hooks/locales/translations/components';
import * as themeStore from '@/app/stores/theme';
import HeaderIcon from './icon';

const ThemeToggle = () => {
	const { isDarkMode } = useThemeStore();
	const tHeader = useLayoutTranslations('header');

	return (
		<button onClick={themeStore.toggle}>
			<HeaderIcon
				Icon={isDarkMode ? Moon : Sun}
				text={tHeader('theme')}
			/>
		</button>
	);
};

export default ThemeToggle;
