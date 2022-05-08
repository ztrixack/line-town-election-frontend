import { describe, expect, test } from 'vitest';
import { validateNationalId } from '../validate';

/**
 * @vitest-environment happy-dom
 */
describe('validate National Id', () => {
	test.each([
		['0000000000001', true],
		['8518785195562', true],
		['6994423180821', true],
		['6994423180820', false],
		['0000000000000', false],
		['0000000000002', false],
		['699442318', false],
	])('input %s, expected: %i', (input, expected) => {
		const output = validateNationalId(input);
		expect(output).toEqual(expected);
	});
});
