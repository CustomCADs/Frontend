import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as src from '../';

const BASE_URL =
	'https://845a4abada4f8cc3e189d27901a36eeb.r2.cloudflarestorage.com/customcads-testing-bucket';
const CONTENT_TYPE = 'file/content-type';
const CONTENT_LENGTH = 256;

const cadUrl = `${BASE_URL}/cads/cad.glb`;
const imageUrl = `${BASE_URL}/images/image.png`;
const cases = [[{ url: cadUrl }], [{ url: imageUrl }]];

describe('File utility tests', () => {
	describe('Fetch', () => {
		const response = {
			ok: true,
			headers: {
				get: (key: string) => {
					switch (key) {
						case 'Content-Type':
							return CONTENT_TYPE;
						case 'Content-Length':
							return CONTENT_LENGTH;
						default:
							return undefined;
					}
				},
			},
		};
		const mockResult = { response, length: CONTENT_LENGTH };

		beforeEach(() => {
			global.fetch = vi.fn().mockResolvedValueOnce(response);
		});

		it.each(cases)('makes proper call to fetch', async (file) => {
			// Arrange
			// Act
			await src.fetchFile({
				presignedUrl: file.url,
				contentType: CONTENT_TYPE,
			});

			// Assert
			expect(global.fetch).toHaveBeenCalledWith(file.url, {
				headers: {
					'Content-Type': CONTENT_TYPE,
				},
			});
		});

		it.each(cases)(
			'returns result when fetch is successful',
			async (file) => {
				// Arrange
				// Act
				const result = await src.fetchFile({
					presignedUrl: file.url,
					contentType: CONTENT_TYPE,
				});

				// Assert
				expect(result.length).toEqual(mockResult.length);
				expect(result.response).toEqual(mockResult.response);
			},
		);

		it.each(cases)(
			'propagates error properly when fetch rejects',
			async (file) => {
				// Arrange
				const error = new Error('Fetch failed');
				global.fetch = vi.fn().mockRejectedValueOnce(error);

				// Act + Assert
				await expect(
					src.fetchFile({
						presignedUrl: file.url,
						contentType: CONTENT_TYPE,
					}),
				).rejects.toThrow(error.message);
			},
		);

		it.each(cases)(
			'throws proper errors when fetch is unsuccessful',
			async (file) => {
				// Arrange
				global.fetch = vi.fn().mockResolvedValueOnce({
					...response,
					ok: false,
					status: 404,
					statusText: 'Not Found',
				});

				// Act
				// Arrange
				await expect(
					src.fetchFile({
						presignedUrl: file.url,
						contentType: CONTENT_TYPE,
					}),
				).rejects.toThrow('Network response was not ok: 404 Not Found');
			},
		);
	});

	describe('Upload', () => {
		const MOCK_FILE = new File([], 'mock-file.mf', { type: 'mock/file' });
		const response = { ok: true };

		beforeEach(() => {
			global.fetch = vi.fn().mockResolvedValueOnce(response);
		});

		it.each(cases)('makes proper call to fetch', async (file) => {
			// Arrange
			// Act
			await src.uploadFile({
				url: file.url,
				file: MOCK_FILE,
			});

			// Assert
			expect(global.fetch).toHaveBeenCalledWith(file.url, {
				body: MOCK_FILE,
				method: 'PUT',
				headers: {
					'Content-Type': MOCK_FILE.type,
					'x-amz-meta-file-name': MOCK_FILE.name,
				},
			});
		});

		it.each(cases)(
			'propagates error properly when fetch rejects',
			async (file) => {
				// Arrange
				const error = new Error('Upload failed');
				global.fetch = vi.fn().mockRejectedValueOnce(error);

				// Act
				// Assert
				await expect(
					src.uploadFile({
						url: file.url,
						file: MOCK_FILE,
					}),
				).rejects.toThrow(error.message);
			},
		);
	});
});
