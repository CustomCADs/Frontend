import type { Distance } from '@/types/units';
import * as units from '@/lib/utils/units';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useMetricsTranslation } from '@/app/hooks/locales/translations/common';
import * as calculate3D from '@/app/utils/calculate-3D';

type Props = { id: string; volume: number; distance: Distance };
const DimensionsInfo = ({ id, volume, distance }: Props) => {
	const tMetrics = useMetricsTranslation();
	const scale = useEditorStore(id, (state) => state.scale);

	const size = useEditorStore(id, (state) => state.size);
	const ratio = calculate3D.baseRatio(size);

	return (
		<p className='flex flex-col text-sm'>
			<span>
				{tMetrics('width')}: {units.size(ratio.x * scale, distance)}
			</span>
			<span>
				{tMetrics('height')}: {units.size(ratio.y * scale, distance)}
			</span>
			<span>
				{tMetrics('length')}: {units.size(ratio.z * scale, distance)}
			</span>
			<span>
				{tMetrics('volume')}: {units.volume(volume, distance)}
			</span>
		</p>
	);
};

export default DimensionsInfo;
