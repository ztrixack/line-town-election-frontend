import { useEffect, useState } from 'preact/hooks';

import { IElectionState } from '@/common/interfaces/election';
import ElectionLayout from '@/containers/layouts/Election';
import { CandidateAPI, ElectionAPI, VoteAPI } from '@/api';
import { ICandidate } from '@/models/candidate';
import { IElection } from '@/models/election';
import useStomp from '@/common/hooks/useStomp';
import { IMessage } from '@stomp/stompjs';
import { IVote } from '@/models/vote';
import FlipCard from '@/containers/components/FlipCard';

const ElectionPage = () => {
	const [candidates, setCandidates] = useState<ICandidate[]>([]);
	const [electionState, setElectionState] = useState<IElectionState>('voting');
	const isElectionClosed = electionState == 'closed';
	const mayor = candidates.reduce((result, candidate) => {
		if (!result) return candidate;

		if (candidate.votedCount > result.votedCount) {
			return candidate;
		} else {
			return result;
		}
	}, candidates[0]);

	const handleVoteStream = (message: IMessage) => {
		const vote = JSON.parse(message.body) as IVote;

		setCandidates(candidates => {
			const index = candidates.findIndex(c => c.id === vote.id);
			candidates[index].votedCount = vote.votedCount;
			return candidates;
		});
	};

	const handleElectionStream = (message: IMessage) => {
		const election = JSON.parse(message.body) as IElection;
		setElectionState(() => election.state);
	};

	useStomp('vote.update', handleVoteStream);
	useStomp('election.status', handleElectionStream);

	useEffect(() => {
		const call = async () => {
			const candidates = await CandidateAPI.find<ICandidate[]>();
			setCandidates(candidates);
			const election = await ElectionAPI.getToggle<IElection>();
			setElectionState(election.state);
		};
		call();
	}, []);

	useEffect(() => {
		const call = async () => {
			let candidates = [];
			switch (electionState) {
				case 'solicit':
					return;
				case 'voting':
					candidates = await CandidateAPI.find<ICandidate[]>();
					break;
				case 'closed':
					candidates = await ElectionAPI.result<ICandidate[]>();
					break;
			}

			setCandidates(candidates);
		};

		call();
	}, [electionState]);

	const handleVote = async (nationalId: string, candidateId: string) => {
		await VoteAPI.vote({ nationalId, candidateId }, { headers: { 'Content-Type': 'application/json' } });
	};

	return (
		<ElectionLayout>
			<div class="flex flex-col justify-center text-center mt-8">
				<h1 class="text-5xl md:text-6xl font-bold my-8">LINE TOWN Election</h1>
				{isElectionClosed && (
					<p class="flex flex-col md:flex-row mb-4 justify-center items-baseline mx-auto">
						<span class="text-lg md:mr-4">The new mayor is:</span>
						<span class="text-4xl font-bold">
							#{mayor.id} {mayor.name}
						</span>
					</p>
				)}
			</div>
			<div class="flex flex-wrap px-3 md:px-6">
				{candidates.map(candidate => (
					<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:px-6">
						<div class="w-full mx-auto my-6">
							<FlipCard {...candidate} state={electionState} onConfirm={handleVote} />
						</div>
					</div>
				))}
			</div>
		</ElectionLayout>
	);
};

export default ElectionPage;
