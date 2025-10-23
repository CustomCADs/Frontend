import { Box3, Group, Mesh, MeshStandardMaterial, Scene, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const lock = (cad: Group) => {
	const box = new Box3().setFromObject(cad);
	const center = new Vector3();
	box.getCenter(center);
	cad.position.sub(center);
};

export const gltf = (
	scene: Scene,
	url: string,
	callback?: (cad: Group) => void,
	progress?: (percentage: number) => void,
) => {
	new GLTFLoader().load(
		url,
		(cad) => {
			lock(cad.scene);
			if (callback) callback(cad.scene);
			scene.add(cad.scene);
		},
		(e) => {
			const percentage = e.loaded / e.total;
			if (progress) progress(percentage);
		},
	);
};

export const stl = (
	scene: Scene,
	url: string,
	callback?: (cad: Group) => void,
	progress?: (percentage: number) => void,
) => {
	new STLLoader().load(
		url,
		(cad) => {
			const group = new Group();
			cad.center();
			group.add(
				new Mesh(cad, new MeshStandardMaterial({ color: 0xaaaaaa })),
			);

			lock(group);
			if (callback) callback(group);
			scene.add(group);
		},
		(e) => {
			const percentage = e.loaded / e.total;
			if (progress) progress(percentage);
		},
	);
};
