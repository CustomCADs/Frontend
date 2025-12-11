import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { useRadioGroups } from '../hooks/useRadioGroups';
import RadioUi from './ui';

type Props = { ui: ReturnType<typeof useRadioGroups>['ui'] };
const MassRadio = ({ ui }: Props) => {
	const tEditor = useGalleryTranslations('editor');

	const { Wrapper, items } = ui.mass(['g', 'kg', 'lbs']);
	return (
		<RadioUi title={tEditor('mass')}>
			<Wrapper className='flex gap-x-2'>{items}</Wrapper>
		</RadioUi>
	);
};

export default MassRadio;
