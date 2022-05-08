import { describe, expect, it } from 'vitest';
import { calculateAge, calculateVote } from '../calculate';

/**
 *  @jest-environment happy-dom
 */
describe('Calculate Age', () => {
	const now = new Date();
	const date = now.getDate();
	const month = now.getMonth();
	const year = now.getFullYear();

	const testCases = [
		{
			title: 'success case',
			input: new Date(`${month}/${date}/${year - 45}`),
			expect: 45,
		},
		{
			title: 'same year in past',
			input: new Date(`${Math.min(1, month - 1)}/${Math.min(1, date - 1)}/${year}`),
			expect: 0,
		},
		{
			title: 'same day',
			input: new Date(`${month}/${date}/${year}`),
			expect: 0,
		},
		{
			title: 'future',
			input: new Date(`${month}/${date}/${year + 1}`),
			expect: 0,
		},
	];

	testCases.forEach(testcase => {
		it(testcase.title, () => {
			const output = calculateAge(testcase.input);
			expect(output).to.be.eq(testcase.expect);
		});
	});
});

/**
 *  @jest-environment happy-dom
 */
describe('Calculate Vote', () => {
	const testCases = [
		{
			title: '0',
			input: 0,
			expect: '0',
		},
		{
			title: '90',
			input: 90,
			expect: '90',
		},
		{
			title: '999',
			input: 999,
			expect: '999',
		},
		{
			title: '1000',
			input: 1000,
			expect: '1K',
		},
		{
			title: '9099',
			input: 9099,
			expect: '9K',
		},
		{
			title: '99999',
			input: 99999,
			expect: '99.9K',
		},
		{
			title: '999999',
			input: 999999,
			expect: '999.9K',
		},
		{
			title: '1000000',
			input: 1000000,
			expect: '1M',
		},
		{
			title: '1000000000000000',
			input: 1000000000000000,
			expect: 'uncountable',
		},
	];

	testCases.forEach(testcase => {
		it(testcase.title, () => {
			const output = calculateVote(testcase.input);
			expect(output.toString()).to.be.eq(testcase.expect);
		});
	});
});
