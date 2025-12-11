import { useEffect } from 'react';
import * as THREE from 'three';
import { Coordinates } from '@customcads/react-sdk';
import { type AllowedType } from '@/lib/cad/get-type';
import { useThreeJS } from '@/hooks/headless/useThreeJS';
import type { Material } from '@/app/types/material';
import { useEditorStore } from '@/app/hooks/stores/useEditorStore';
import { useEditorThreeJS } from './hooks/useEditorThreeJS';
import Model from '../model';

type Cad = {
	id: string;
	blobUrl: string;
	type: AllowedType | null;
	coords: { cam: Coordinates; pan: Coordinates };
	volume: number;
};

type Props = { cad: Cad; texture: Material };
const EditorThreeJS = ({ cad, texture }: Props) => {
	const { update } = useEditorThreeJS(cad.id);
	const store = {
		color: useEditorStore(cad.id, (state) => state.color),
		size: useEditorStore(cad.id, (state) => state.size),
		scale: useEditorStore(cad.id, (state) => state.scale),
		infill: useEditorStore(cad.id, (state) => state.infill),
	};

	const threejs = useThreeJS(
		{ url: cad.blobUrl, type: cad.type, coords: cad.coords },
		(threejs) => {
			update.scene(threejs);
			threejs.traverse((child) => {
				if (child instanceof THREE.Mesh) {
					child.material.map = undefined;
				}
			});

			update.looks(texture.blobUrl, store.color);
			update.metrics({ ...cad, ...texture, ...store });
		},
	);

	useEffect(() => {
		update.looks(texture.blobUrl, store.color);
	}, [texture, store.color]);

	useEffect(() => {
		update.metrics({ ...cad, ...texture, ...store });
	}, [cad.volume, texture.density, store.size, store.scale, store.infill]);

	return <Model threejs={threejs} />;
};

export default EditorThreeJS;
