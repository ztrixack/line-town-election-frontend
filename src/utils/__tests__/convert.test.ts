import { describe, expect, test } from 'vitest';
import { toNationalIdPresent } from '../convert';

/**
 * @vitest-environment happy-dom
 */
describe('to National ID for present', () => {
	test.each([
		['1', '1'],
		['123', '1-23'],
		['12345678', '1-2345-678'],
		['12345678901', '1-2345-67890-1'],
		['1234567890123', '1-2345-67890-12-3'],
		['1234567890123456', '1-2345-67890-12-3'],
		['123x4567t890d123', '1-2345-67890-12-3'],
	])('input %s, expected: %i', (input, expected) => {
		const output = toNationalIdPresent(input);
		expect(output).toEqual(expected);
	});
});
