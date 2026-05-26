import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/app/hooks/stores/useThemeStore';
import * as themeStore from '@/app/stores/theme';
import { Switch } from '@/app/components/ui';
import CustomIcon from '@/app/components/icon';

export const ThemeToggle = () => {
	const { isDarkMode } = useThemeStore();

	return (
		<div
			className='flex items-center gap-x-2 cursor-pointer hover:text-muted-foreground'
			onClick={themeStore.toggle}
		>
			<CustomIcon Icon={Sun} clickable={false} />
			<Switch id='theme' checked={isDarkMode} />
			<CustomIcon Icon={Moon} clickable={false} />
		</div>
	);
};

export default ThemeToggle;
