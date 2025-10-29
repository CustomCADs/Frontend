import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/app/hooks/stores/useThemeStore';
import * as themeStore from '@/app/stores/theme';
import { Switch } from '@/app/components/ui/switch';
import HeaderIcon from './icon';

const ThemeToggle = () => {
	const { isDarkMode } = useThemeStore();

	return (
		<div className='flex items-center gap-x-2' onClick={themeStore.toggle}>
			<HeaderIcon Icon={Sun} clickable={false} />
			<Switch id='theme' checked={isDarkMode} />
			<HeaderIcon Icon={Moon} clickable={false} />
		</div>
	);
};

export default ThemeToggle;
