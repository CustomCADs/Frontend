import { describe, expect, it } from 'vitest';
import * as src from '../auth';

describe('Auth utility tests', () => {
	describe('Is', () => {
		it('returns guest true when not authenticated', () => {
			// Arrange
			// Act
			const result = src.is({ authn: false, authz: null });

			// Assert
			expect(result).toEqual({
				guest: true,
				customer: false,
				contributor: false,
				designer: false,
				admin: false,
				creator: false,
			});
		});

		it('returns correct role when authenticated', () => {
			// Arrange
			const roles = [
				'Customer',
				'Contributor',
				'Designer',
				'Admin',
			] as const;

			// Act
			// Assert
			roles.forEach((role) => {
				const result = src.is({ authn: true, authz: role });
				expect(result.guest).toBe(false);
				expect(result.customer).toBe(role === 'Customer');
				expect(result.contributor).toBe(role === 'Contributor');
				expect(result.designer).toBe(role === 'Designer');
				expect(result.admin).toBe(role === 'Admin');
				expect(result.creator).toBe(
					role === 'Contributor' || role === 'Designer',
				);
			});
		});

		it('returns all false except guest for unknown authz', () => {
			// Arrange
			// Act
			const result = src.is({ authn: true, authz: 'Unknown' as never });

			// Assert
			expect(result).toEqual({
				guest: false,
				customer: false,
				contributor: false,
				designer: false,
				admin: false,
				creator: false,
			});
		});
	});
});
