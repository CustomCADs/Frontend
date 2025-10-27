import { describe, expect, it } from 'vitest';
import * as src from '../uuid';

const ids = [
	'21245254-6937-4d90-a90a-6b981c48b05b',
	'1dcb14ec-5243-4074-875b-b29a826a9c59',
	'a41c0d4f-a106-4710-9c81-f3efd7f2aac4',
];

describe('UUID utility tests', () => {
	describe('Extract Segment', () => {
		const cases1 = ids.map((x) => [x]);
		const cases2 = ids.map((x, i) => [{ id: x, index: i }]);

		it.each(cases1)('should split first segment correctly', (id) => {
			// Arrange
			// Act
			const segment = src.extractSegment(id, 'first');

			// Assert
			expect(segment).toEqual(id.split('-')[0]);
		});

		it.each(cases2)(
			'should split custom segment correctly',
			({ id, index }) => {
				// Arrange
				// Act
				const segment = src.extractSegment(id, index);

				// Assert
				expect(segment).toEqual(id.split('-')[index]);
			},
		);

		it.each(cases1)('should split last segment correctly', (id) => {
			// Arrange
			// Act
			const segment = src.extractSegment(id, 'last');

			// Assert
			expect(segment).toEqual(id.split('-')[id.split('-').length - 1]);
		});

		it('should return undefined for out-of-bounds numeric index', () => {
			// Arrange
			// Act
			const segment = src.extractSegment(ids[0], 10);

			// Assert
			expect(segment).toBeUndefined();
		});

		it('should handle single-segment strings', () => {
			// Arrange
			const id = 'onlyone';

			// Act
			// Assert
			expect(src.extractSegment(id, 'first')).toBe('onlyone');
			expect(src.extractSegment(id, 'last')).toBe('onlyone');
			expect(src.extractSegment(id, 0)).toBe('onlyone');
			expect(src.extractSegment(id, 1)).toBeUndefined();
		});

		it('should handle empty string', () => {
			// Arrange
			const id = '';

			// Act
			// Assert
			expect(src.extractSegment(id, 'first')).toBe('');
			expect(src.extractSegment(id, 'last')).toBe('');
			expect(src.extractSegment(id, 0)).toBe('');
			expect(src.extractSegment(id, 1)).toBeUndefined();
		});
	});
});
