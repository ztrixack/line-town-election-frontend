import { describe, expect, test, vi, beforeAll, afterAll } from 'vitest';
import { calculateAge, calculateVote } from '../calculate';

const date = 8;
const month = 5;
const year = 2022;

/**
 * @vitest-environment happy-dom
 */
describe('Calculate Age', () => {
	beforeAll(() => {
		vi.useFakeTimers();

		const now = new Date(year, month, date);
		vi.setSystemTime(now);
	});

	afterAll(() => {
		vi.useRealTimers();
	});

	test.each([
		[`${month}/${date}/${year - 45}`, 45],
		[`${month}/${date - 1}/${year}`, 0],
		[`${month}/${date}/${year}`, 0],
		[`${month}/${date + 1}/${year}`, 0],
	])('input date %s, expected: %i', (date, expected) => {
		const output = calculateAge(new Date(date));
		expect(output).toEqual(expected);
	});
});

/**
 * @vitest-environment happy-dom
 */
describe('Calculate Vote', () => {
	test.each([
		[0, '0'],
		[90, '90'],
		[999, '999'],
		[1000, '1K'],
		[9099, '9K'],
		[99999, '99.9K'],
		[999999, '999.9K'],
		[1000000, '1M'],
		[1000000000000000, 'uncountable'],
	])('input %i, get %s', (input, expected) => {
		const output = calculateVote(input);
		expect(output.toString()).toEqual(expected);
	});
});
