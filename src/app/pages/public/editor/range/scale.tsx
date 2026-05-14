import * as units from '@/lib/utils/units';
import * as editor from '@/app/stores/editor';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useGalleryTranslations } from '@/app/hooks/locales/translations/pages/public';
import { Slider } from '@/app/components/ui/slider';
import * as calculate3D from '@/app/utils/calculate-3D';

const ScaleRange = ({ id }: { id: string }) => {
	const state = {
		size: useEditorStore(id, (state) => state.size),
		scale: useEditorStore(id, (state) => state.scale),
	};
	const actions = editor.getActions(id);

	const tEditor = useGalleryTranslations('editor');
	const ratio = calculate3D.baseRatio(state.size);

	return (
		<div className='flex flex-col gap-y-2'>
			<span className='text-base'>
				{tEditor('scale')}: {units.percentage(100 * state.scale)}
			</span>
			<Slider
				min={1}
				max={calculate3D.getMaxRatio(ratio)}
				value={[parseFloat(state.scale.toFixed(4))]}
				onValueChange={(values) => actions.set.scale(values[0])}
				size={0.0001}
			/>
		</div>
	);
};

export default ScaleRange;
