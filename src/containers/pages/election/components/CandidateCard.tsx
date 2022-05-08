import { FunctionComponent, JSX } from 'preact';

import { ICandidate } from '@/models/candidate';
import { IElectionState } from '@/common/interfaces/election';
import { calculateAge, calculateVote } from '@/utils/calculate';
import Card from '@/containers/components/Card';

export type IProps = ICandidate & {
	state: IElectionState;
	onOpenVote: () => void;
};

const CandidateCard: FunctionComponent<IProps> = ({
	id,
	name,
	dob,
	imageLink,
	policy,
	votedCount,
	state,
	percentage = '0%',
	onOpenVote,
}) => {
	const age = calculateAge(dob).toString();
	const vote = calculateVote(votedCount).toString();

	const handleVoteClick = (e: JSX.TargetedEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onOpenVote();
	};

	return (
		<Card>
			<div class="flex space-x-4 md:flex-col md:space-x-0">
				<div class="flex flex-1 justify-end md:mb-3">
					<img class="w-full h-28 md:h-48 shadow-lg object-cover" src={imageLink} alt={name} />
					<div class="absolute w-8 md:w-12 bg-white text-center">
						<span class="text-2xl md:text-4xl font-bold">{id}</span>
					</div>
				</div>
				<div class="flex flex-1 flex-col md:flex-row justify-between">
					<div>
						<h3 class="text-2xl font-bold text-gray-900">{name}</h3>
						<p class="text-sm  text-gray-700">{age} yrs</p>
					</div>
					<div class="md:text-center">
						<h4 class="text-2xl font-bold text-gray-900">{vote}</h4>
						<p class="text-sm  text-gray-700">votes</p>
					</div>
				</div>
			</div>

			<div class="flex flex-auto justify-center items-center py-2 px-2 md:px-0">
				<p class="text-2xl md:text-lg font-bold text-gray-900 text-center">
					<i>"{policy}"</i>
				</p>
			</div>

			<div class="flex justify-end flex-col px-2 mb-2">
				{state == 'closed' ? (
					<div class="w-full bg-white border border-green-900">
						<div
							class="bg-green-400 py-2 font-medium text-white text-center p-0.5 leading-none"
							style={{ width: percentage }}
							data-testid="vote-percentage"
						>
							{percentage}
						</div>
					</div>
				) : (
					<button
						type="button"
						class={`${state == 'voting' ? '' : 'hidden '}btn btn-primary w-28 mx-auto`}
						data-testid="vote-button"
						onClick={handleVoteClick}
					>
						Vote
					</button>
				)}
			</div>
		</Card>
	);
};

export default CandidateCard;
