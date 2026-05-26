import { useRef } from 'react';
import * as THREE from 'three';
import { CalculateCad } from '@/types/threejs';
import { getEnv } from '@/lib/isomorphic';
import { updateMaterial, boxSize } from '@/lib/cad';
import * as editor from '@/app/stores/editor';
import * as calculate3D from '@/app/utils/calculate-3D';

export const useEditorThreeJS = (cadId: string) => {
	const refs = {
		originalScale: useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0)),
		cad: useRef<THREE.Group>(null),
		lastTextures: useRef<Map<THREE.Object3D, string>>(new Map()),
	};
	const actions = editor.getActions(cadId);

	const update = {
		scene: (cad: THREE.Group) => {
			refs.originalScale.current = cad.scale.clone();
			refs.cad.current = cad;

			const size = boxSize(refs.cad.current);
			actions.set.size(size);
		},
		looks: (texture: string, color?: string) => {
			if (getEnv().isServer) return;

			const textures = refs.lastTextures.current;
			refs.cad.current?.traverse(
				updateMaterial({ texture, color, textures }),
			);
		},
		metrics: ({
			volume,
			density,
			euroPerKg,
			scale,
			size,
			infill,
		}: CalculateCad) => {
			const volumeMm3 = calculate3D.volumeMm3(volume, scale, size);

			const weight = calculate3D.weightGrams(volumeMm3, infill, density);
			actions.set.weight(weight);

			const cost = calculate3D.costEUR(weight, euroPerKg);
			actions.set.cost(cost);

			if (refs.cad.current) {
				refs.cad.current.scale.copy(refs.originalScale.current);
				refs.cad.current.scale.multiplyScalar(scale);
			}
		},
	};

	return { update };
};
