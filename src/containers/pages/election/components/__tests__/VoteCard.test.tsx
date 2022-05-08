import { h } from 'preact';
import { describe, expect, test, vi } from 'vitest';

import { render, screen, userEvent } from '@/utils/test-utils';
import { toNationalIdPresent } from '@/utils/convert';
import VoteCard from '../VoteCard';

/**
 * @vitest-environment happy-dom
 */
describe('Vote Card', () => {
	test('check confirm button', async () => {
		const onConfirmSpy = vi.fn();
		const wrapper = render(<VoteCard candidateId="1" onConfirm={onConfirmSpy} />);
		expect(wrapper.getByTestId('national-id-input')).toBeInTheDocument();
		expect(wrapper.getByTestId('confirm-button')).toBeInTheDocument();

		const input = wrapper.getByTestId('national-id-input');

		expect(screen.getByTestId('confirm-button')).toBeDisabled();
		await userEvent.type(input, '1234567890123', { delay: 1 });
		expect(screen.getByTestId('national-id-input')).toHaveValue('1234567890123');
	});

	test.each([
		['1', '1'],
		['123', '1-23'],
		['12345678', '1-2345-678'],
		['12345678901', '1-2345-67890-1'],
		['1234567890123', '1-2345-67890-12-3'],
		['1234567890123456', '1-2345-67890-12-3'],
		['123x4567t890d123', '1-2345-67890-12-3'],
	])('typing %s show %s', async (typing, expected) => {
		const wrapper = render(<VoteCard candidateId="1" />);
		expect(wrapper.getByTestId('national-id-input')).toBeInTheDocument();
		expect(wrapper.getByTestId('confirm-button')).toBeInTheDocument();
		expect(wrapper.getByTestId('cancel-button')).toBeInTheDocument();

		const input = wrapper.getByTestId('national-id-input') as HTMLInputElement;
		// const cancelButton = screen.getByTestId('cancel-button');

		input.focus();
		await userEvent.type(input, typing, { delay: 1 });
		input.blur();

		expect(input).toHaveDisplayValue(typing);
		const output = toNationalIdPresent(input.value);
		expect(output).toEqual(expected);
	});
});
