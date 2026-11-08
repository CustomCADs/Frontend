import { CustomizationCad } from '@/app/types/printing';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import * as calculate3D from '@/app/utils/calculate-3D';

export const useCustomizationConstruction = (cad: CustomizationCad) => {
	const { materialId, color, size, scale, infill } = useEditorStore(
		cad.id,
		(state) => state,
	);
	const base = calculate3D.getMinSize(size);

	return {
		materialId,
		color,
		scale,
		infill,
		volume: cad.volume,
		base: base !== 0 ? base : 1,
	};
};
