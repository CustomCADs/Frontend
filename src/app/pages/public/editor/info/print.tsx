import { type Mass } from '@/types/units';
import { units } from '@/lib/utils';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useMoneyFormatter } from '@/app/hooks/locales/useMoneyFormatter';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';

type Props = { id: string; mass: Mass };
const PrintInfo = ({ id, mass }: Props) => {
	const state = {
		weight: useEditorStore(id, (state) => state.weight),
		cost: useEditorStore(id, (state) => state.cost),
	};

	const tEditor = useGalleryTranslations('editor');
	const weight = units.weight(state.weight, mass);

	const formatMoney = useMoneyFormatter();
	const cost = formatMoney(state.cost);

	return (
		<p className='flex flex-col-reverse md:flex-row justify-center items-center gap-x-8'>
			<span className='text-lg font-bold'>
				{tEditor('weight')}: {weight}
			</span>
			<span className='text-xl font-bold'>
				{tEditor('cost')}: {cost}
			</span>
		</p>
	);
};

export default PrintInfo;
