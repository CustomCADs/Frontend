import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Coordinates } from '@/types/threejs';
import { getEnv } from '@/lib/isomorphic/env';
import { initThreeJS, clearScene } from '@/lib/cad/three-js';
import * as loader from '@/lib/cad/loader';

export const useThreeJS = (
	file?: {
		url: string;
		type: 'glb' | 'gltf' | 'stl' | null;
		coords: { cam: Coordinates; pan: Coordinates };
	},
	loadCallback?: (cad: THREE.Group) => void,
) => {
	const [progress, setProgress] = useState(0);

	const mountRef = useRef<HTMLDivElement>(null);
	const instanceRef = useRef<ReturnType<typeof initThreeJS> | null>(null);

	useEffect(() => {
		if (getEnv().isClient && file?.type) {
			instanceRef.current ??= initThreeJS(mountRef.current, file.coords);

			const scene = instanceRef.current?.scene;
			if (scene) {
				clearScene(scene);

				if (file.type === 'stl') {
					loader.stl(scene, file.url, loadCallback, setProgress);
				} else {
					loader.gltf(scene, file.url, loadCallback, setProgress);
				}
			}
		}

		return () => {
			instanceRef.current?.exit();
			instanceRef.current = null;
		};
	}, [file?.type, file?.url, file?.coords.cam, file?.coords.pan]);

	return { ref: mountRef, instance: instanceRef.current, progress };
};
