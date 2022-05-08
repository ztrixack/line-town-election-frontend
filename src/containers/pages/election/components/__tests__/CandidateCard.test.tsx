import { h } from 'preact';
import { describe, expect, test } from 'vitest';
import CandidateCard, { IProps } from '../CandidateCard';
import { render } from '@/utils/test-utils';

/**
 * @vitest-environment happy-dom
 */
describe('Election State', () => {
	const defaultData: IProps = {
		id: 1,
		name: 'John Wick',
		dob: new Date('June 28, 1971'),
		imageLink: '<http://placekitten.com/600/600>',
		policy: "Choose me if your don't know who to choose",
		votedCount: 0,
		state: 'solicit',
	};

	test.each([
		[{ ...defaultData }, { isVoteButtonVisible: false, isVotedBarVisible: false }],
		[
			{ ...defaultData, state: 'voting' },
			{ isVoteButtonVisible: true, isVotedBarVisible: false },
		],
		[
			{ ...defaultData, state: 'closed' },
			{ isVoteButtonVisible: false, isVotedBarVisible: true },
		],
	])('state: %j', (props, result) => {
		const wrapper = render(<CandidateCard {...(props as IProps)} />);
		const button = wrapper.queryByTestId('vote-button');
		const bar = wrapper.queryByTestId('vote-percentage');

		if (result.isVoteButtonVisible) {
			expect(button).toBeTruthy();
		} else {
			if (props.state === 'solicit') {
				expect(button).toHaveClass('hidden');
			} else {
				expect(button).toBeNull();
			}
		}

		if (result.isVotedBarVisible) {
			expect(bar).not.toBeNull();
		} else {
			expect(bar).toBeNull();
		}
	});
});
