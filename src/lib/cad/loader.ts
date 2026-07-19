import { Box3, Group, Mesh, MeshStandardMaterial, Scene, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

const lock = (cad: Group) => {
	const box = new Box3().setFromObject(cad);
	const center = new Vector3();
	box.getCenter(center);
	cad.position.sub(center);
};

export const gltf = async (
	scene: Scene,
	url: string,
	callback?: (cad: Group) => void,
	progress?: (percentage: number) => void,
) => {
	const cad = await new GLTFLoader().loadAsync(url, ({ loaded, total }) => {
		const percentage = loaded / total;
		if (progress) progress(percentage);
	});

	lock(cad.scene);
	if (callback) callback(cad.scene);
	scene.add(cad.scene);
};

export const stl = async (
	scene: Scene,
	url: string,
	callback?: (cad: Group) => void,
	progress?: (percentage: number) => void,
) => {
	const cad = await new STLLoader().loadAsync(url, ({ loaded, total }) => {
		const percentage = loaded / total;
		if (progress) progress(percentage);
	});

	const group = new Group();
	cad.center();
	group.add(new Mesh(cad, new MeshStandardMaterial({ color: 0xaaaaaa })));

	lock(group);
	if (callback) callback(group);
	scene.add(group);
};
