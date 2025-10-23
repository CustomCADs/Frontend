import { describe, expect, it } from 'vitest';
import * as src from '../typescript';

describe('TypeScript utility tests', () => {
	describe('Invert By', () => {
		it('inverts an object by a property', () => {
			// Arrange
			const obj = {
				a: { code: 'x', value: 1 },
				b: { code: 'y', value: 2 },
			};

			// Act
			const result = src.invertBy(obj, 'code');

			// Assert
			expect(result).toEqual({ x: 'a', y: 'b' });
		});

		it('returns empty object for empty input', () => {
			// Arrange
			// Act
			const result = src.invertBy({}, 'code');

			// Assert
			expect(result).toEqual({});
		});

		it('handles numeric properties', () => {
			// Arrange
			const obj = {
				a: { num: 10 },
				b: { num: 20 },
			};

			// Act
			const result = src.invertBy(obj, 'num');

			// Assert
			expect(result).toEqual({ 10: 'a', 20: 'b' });
		});

		it('last value wins for duplicate property values', () => {
			// Arrange
			const obj = {
				a: { code: 'dup' },
				b: { code: 'dup' },
			};

			// Act
			const result = src.invertBy(obj, 'code');

			// Assert
			expect(result).toEqual({ dup: 'b' });
		});

		it('works with symbol properties', () => {
			// Arrange
			const sym1 = Symbol('s1');
			const sym2 = Symbol('s2');
			const obj = {
				a: { sym: sym1 },
				b: { sym: sym2 },
			};

			// Act
			const result = src.invertBy(obj, 'sym');

			// Assert
			expect(result).toEqual({ [sym1]: 'a', [sym2]: 'b' });
		});
	});
});
