import { CustomizationCad } from '@/app/types/printing';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import * as calculate3D from '@/app/utils/calculate-3D';

export const useCustomizationConstruction = (cad: CustomizationCad) => ({
	materialId: useEditorStore(cad.id, (state) => state.materialId),
	color: useEditorStore(cad.id, (state) => state.color),
	volume: cad.volume,
	base: calculate3D.getMinSize(useEditorStore(cad.id, (state) => state.size)),
	scale: useEditorStore(cad.id, (state) => state.scale),
	infill: useEditorStore(cad.id, (state) => state.infill),
});
