import { h } from 'preact';
import { render } from '@testing-library/preact';
import '@testing-library/jest-dom';
import CandidateCard, { IProps } from '../CandidateCard';

/**
 *  @jest-environment happy-dom
 */
describe('Election State', () => {
	type ITestCase = {
		title: string;
		props: IProps;
		result: {
			isVoteButtonVisible: boolean;
			isVotedBarVisible: boolean;
		};
	};

	const defaultData: IProps = {
		id: 1,
		name: 'John Wick',
		dob: new Date('June 28, 1971'),
		imageLink: '<http://placekitten.com/600/600>',
		policy: "Choose me if your don't know who to choose",
		votedCount: 0,
		state: 'solicit',
	};

	const testCases: ITestCase[] = [
		{
			title: 'state: solicit',
			props: { ...defaultData },
			result: {
				isVoteButtonVisible: false,
				isVotedBarVisible: false,
			},
		},
		{
			title: 'state: voting',
			props: { ...defaultData, state: 'voting' },
			result: {
				isVoteButtonVisible: true,
				isVotedBarVisible: false,
			},
		},
		{
			title: 'state: closed',
			props: { ...defaultData, state: 'closed' },
			result: {
				isVoteButtonVisible: false,
				isVotedBarVisible: true,
			},
		},
	];

	testCases.forEach(testcase => {
		it(testcase.title, () => {
			const wrapper = render(<CandidateCard {...testcase.props} />);
			const button = wrapper.queryByTestId('vote-button');
			const bar = wrapper.queryByTestId('vote-percentage');

			if (testcase.result.isVoteButtonVisible) {
				expect(button).toBeTruthy();
			} else {
				if (testcase.props.state === 'solicit') {
					expect(button).toHaveClass('hidden');
				} else {
					expect(button).toBeNull();
				}
			}

			if (testcase.result.isVotedBarVisible) {
				expect(bar).not.toBeNull();
			} else {
				expect(bar).toBeNull();
			}
		});
	});
});
