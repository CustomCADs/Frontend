/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import * as src from '@/lib/cad/three-js';

vi.mock('three', async () => {
	const actual = await vi.importActual<typeof import('three')>('three');
	return {
		...actual,
		WebGLRenderer: vi.fn().mockImplementation(() => ({
			domElement: document.createElement('canvas'),
			setSize: vi.fn(),
			render: vi.fn(),
			dispose: vi.fn(),
		})),
		PerspectiveCamera: vi.fn().mockImplementation(() => ({
			position: { set: vi.fn() },
			updateProjectionMatrix: vi.fn(),
		})),
		Scene: vi.fn().mockImplementation(() => ({
			children: [],
			add: vi.fn(),
			remove: vi.fn(),
			traverse: vi.fn((cb) => cb({})),
		})),
	};
});
const vector = new THREE.Vector3(1, 2, 3);

describe('THREE.js utility tests', () => {
	describe('Box Size', () => {
		it('computes bounding box size', () => {
			// Arrange
			const group = new THREE.Group();
			vi.spyOn(THREE.Box3.prototype, 'setFromObject').mockReturnThis();
			vi.spyOn(THREE.Box3.prototype, 'getSize').mockReturnValue(vector);

			// Act
			const size = src.boxSize(group);

			// Assert
			expect(size).toEqual(vector);
		});
	});

	describe('Clear Scene', () => {
		it('disposes geometries and removes groups', () => {
			// Arrange
			const dispose = vi.fn();
			const mesh = { geometry: { dispose }, material: { dispose } };
			const group = { type: 'Group' };
			const scene = {
				children: [group],
				traverse: (fn: any) => fn(mesh),
				remove: vi.fn(),
			};

			// Act
			src.clearScene(scene as any);

			// Assert
			expect(dispose).toHaveBeenCalled();
			expect(scene.remove).toHaveBeenCalledWith(group);
		});
	});
});
