import type { Mass } from '@/types/units';
import * as units from '@/lib/utils/units';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useMoney } from '@/app/hooks/locales/useMoney';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';

type Props = { id: string; mass: Mass };
const PrintInfo = ({ id, mass }: Props) => {
	const state = {
		weight: useEditorStore(id, (state) => state.weight),
		cost: useEditorStore(id, (state) => state.cost),
	};
	const tEditor = useGalleryTranslations('editor');

	const cost = useMoney(state.cost);
	const weight = units.weight(state.weight, mass);

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
