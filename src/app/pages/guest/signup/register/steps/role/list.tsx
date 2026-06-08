import { useSignupTranslations } from '@/app/hooks/locales/translations/pages/guest';
import Bullet from './bullet';
import { cn } from '@/lib/utils';

type Props = { prefix: 'customer' | 'contributor'; show?: boolean };
const List = ({ prefix, show }: Props) => {
	const tRole = useSignupTranslations('role');
	if (!show) return;

	return (
		<ul className={cn('italic flex flex-col', 'items-start')}>
			<Bullet text={tRole(`${prefix}-plus-1`)} />
			<Bullet text={tRole(`${prefix}-plus-2`)} />
			<Bullet text={tRole(`${prefix}-plus-3`)} />
		</ul>
	);
};

export default List;
