import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as src from '../form';

describe('Form utility tests', () => {
	describe('Equality Helper', () => {
		let helper: ReturnType<typeof src.equalityHelper>;

		beforeEach(() => {
			helper = src.equalityHelper();
		});

		it('sync method should return true', () => {
			// Arrange
			// Act
			const result = helper.sync('test');

			// Assert
			expect(result).toBe(true);
		});

		it.each([{ input: 'test' }, { input: 'different' }])(
			'check method should return correctly when input is $input',
			({ input }) => {
				// Arrange
				const expected = 'test';
				helper.sync(expected);

				// Act
				const result = helper.check(input);

				// Assert
				expect(result).toBe(input === expected);
			},
		);
	});

	describe('File Helper', () => {
		it('returns false for empty file', () => {
			// Arrange
			const emptyFile = new File([''], 'empty.txt', {
				type: 'text/plain',
			});

			// Act
			// Assert
			expect(src.fileHelper(emptyFile)).toBe(false);
		});

		it('returns true for non-empty file', () => {
			// Arrange
			const content = 'hello world';
			const nonEmptyFile = new File([content], 'hello.txt', {
				type: 'text/plain',
			});

			// Act
			// Assert
			expect(src.fileHelper(nonEmptyFile)).toBe(true);
		});

		it('works for large files', () => {
			// Arrange
			const largeContent = new Array(1_000_000).fill('a').join('');
			const largeFile = new File([largeContent], 'large.txt', {
				type: 'text/plain',
			});

			// Act
			// Assert
			expect(src.fileHelper(largeFile)).toBe(true);
		});
	});

	describe('Extract Error', () => {
		it('returns the detail string when present', () => {
			// Arrange
			const error = {
				response: { data: { detail: 'Something went wrong' } },
			};

			// Act
			// Assert
			expect(src.extractError(error)).toBe('Something went wrong');
		});

		it('returns undefined if response is missing', () => {
			// Arrange
			const error = { foo: 'bar' };

			// Act
			// Assert
			expect(src.extractError(error)).toBeUndefined();
		});

		it('returns undefined if data is missing', () => {
			// Arrange
			const error = { response: { foo: 'bar' } };

			// Act
			// Assert
			expect(src.extractError(error)).toBeUndefined();
		});

		it('returns undefined if detail is missing', () => {
			// Arrange
			const error = { response: { data: { message: 'oops' } } };

			// Act
			// Assert
			expect(src.extractError(error)).toBeUndefined();
		});

		it('returns undefined if error is null or undefined', () => {
			// Arrange
			// Act
			// Assert
			expect(src.extractError(null)).toBeUndefined();
			expect(src.extractError(undefined)).toBeUndefined();
		});
	});

	describe('Fields have Errors', () => {
		const NO_ERRORS: never[] = [];

		it('returns false if no fields have errors', () => {
			// Arrange
			const getErrors = vi.fn().mockReturnValue({ errors: NO_ERRORS });
			const onErrorFound = vi.fn();

			// Act
			const result = src
				.doFieldsHaveErrors(getErrors, onErrorFound)
				.evaluateFields(['field1', 'field2']);

			// Assert
			expect(result).toBe(false);
			expect(onErrorFound).not.toHaveBeenCalled();
			expect(getErrors).toHaveBeenCalledTimes(2);
		});

		it('returns true if at least one field has errors', () => {
			// Arrange
			const getErrors = vi.fn((field) => ({
				errors: field === 'field2' ? ['error'] : NO_ERRORS,
			}));
			const onErrorFound = vi.fn();

			// Act
			const result = src
				.doFieldsHaveErrors(getErrors, onErrorFound)
				.evaluateFields(['field1', 'field2', 'field3']);

			// Assert
			expect(result).toBe(true);
			expect(onErrorFound).toHaveBeenCalledTimes(1);
			expect(onErrorFound).toHaveBeenCalledWith('field2');
		});

		it('handles empty fields array', () => {
			// Arrange
			const getErrors = vi.fn();
			const onErrorFound = vi.fn();

			// Act
			const result = src
				.doFieldsHaveErrors(getErrors, onErrorFound)
				.evaluateFields(NO_ERRORS);

			// Assert
			expect(result).toBe(false);
			expect(getErrors).not.toHaveBeenCalled();
			expect(onErrorFound).not.toHaveBeenCalled();
		});

		it('calls onErrorFound for each field with errors', () => {
			// Arrange
			const getErrors = vi.fn((field) => ({
				errors: field === 'field2' ? NO_ERRORS : ['e'],
			}));
			const onErrorFound = vi.fn();

			// Act
			const result = src
				.doFieldsHaveErrors(getErrors, onErrorFound)
				.evaluateFields(['field1', 'field2', 'field3']);

			// Assert
			expect(result).toBe(true);
			expect(onErrorFound).toHaveBeenCalledTimes(2);
			expect(onErrorFound).toHaveBeenCalledWith('field1');
			expect(onErrorFound).toHaveBeenCalledWith('field3');
		});
	});
});
