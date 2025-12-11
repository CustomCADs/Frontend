import * as units from '@/lib/utils/units';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import * as calculate3D from '@/app/utils/calculate-3D';
import RangeUi from './ui';

const ScaleRange = ({ id }: { id: string }) => {
	const state = {
		size: useEditorStore(id, (state) => state.size),
		scale: useEditorStore(id, (state) => state.scale),
	};
	const actions = editor.getActions(id);

	const tEditor = useGalleryTranslations('editor');
	const ratio = calculate3D.baseRatio(state.size);

	return (
		<RangeUi
			min={1}
			max={calculate3D.getMaxRatio(ratio)}
			values={[parseFloat(state.scale.toFixed(4))]}
			onDrag={(e) => actions.set.scale(e.sortedValues[0])}
			stepSize={0.0001}
		>
			<span className='text-base'>
				{tEditor('scale')}: {units.percentage(100 * state.scale)}
			</span>
		</RangeUi>
	);
};

export default ScaleRange;
