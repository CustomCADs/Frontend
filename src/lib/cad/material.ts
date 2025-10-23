import * as THREE from 'three';
import { CustomizeCad } from '@/types/threejs';

type UpdateProps = CustomizeCad & {
	textures: Map<THREE.Object3D, string>;
};
export const updateMaterial = ({ textures, texture, color }: UpdateProps) => {
	return (cad: THREE.Object3D<THREE.Object3DEventMap>) => {
		if (cad instanceof THREE.Mesh) {
			if (textures.get(cad) !== texture) {
				textures.set(cad, texture);
				cad.material = new THREE.MeshStandardMaterial({
					map: new THREE.TextureLoader().load(texture),
					color: color,
				});
			}

			if (color) {
				cad.material.color.set(color);
			} else {
				cad.material.color.setHex(0xffffff);
			}
		}
	};
};
