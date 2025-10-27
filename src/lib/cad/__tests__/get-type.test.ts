import { describe, expect, it } from 'vitest';
import * as src from '../get-type';

describe('Get Type utility tests', () => {
	describe('Get Cad Content Type', () => {
		const cases = src.ALLOWED_CONTENT_TYPES.map((x) => [x]);
		it.each(cases)(
			'should return expected content type when file type allowed',
			(contentType) => {
				// Arrange
				const MOCK_FILE = new File([], 'mock-file.mf', {
					type: contentType,
				});

				// Act
				const type = src.getCadContentType(MOCK_FILE);

				// Assert
				expect(type).toEqual(contentType);
			},
		);

		it('should return application/octet-stream when file type not allowed', () => {
			// Arrange
			const MOCK_FILE = new File([], 'mock-file.mf', {
				type: 'mock/file',
			});
			// Act
			const type = src.getCadContentType(MOCK_FILE);

			// Assert
			expect(type).toEqual('application/octet-stream');
		});
	});

	describe('Get Cad Type', () => {
		const cases = src.ALLOWED_CONTENT_TYPES.map((x) => [x]);
		it.each(cases)(
			'should return expected type when contentType allowed',
			(contentType) => {
				// Arrange
				// Act
				const type = src.getCadType(contentType);

				// Assert
				switch (contentType) {
					case 'model/gltf-binary':
						expect(type).toEqual('glb');
						break;
					case 'model/stl':
						expect(type).toEqual('stl');
						break;
					case 'application/octet-stream':
						expect(type).toEqual(null);
						break;
					default:
						break;
				}
			},
		);

		it('should return undefined when contentType not allowed', () => {
			// Arrange
			// Act
			const type = src.getCadType(
				'not-a-valid/content-type' as src.AllowedContentType,
			);

			// Assert
			expect(type).toBeUndefined();
		});
	});
});
