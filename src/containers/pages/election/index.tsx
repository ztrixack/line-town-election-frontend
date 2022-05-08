import { useEffect, useState } from 'preact/hooks';

import { IElectionState } from '@/common/interfaces/election';
import ElectionLayout from '@/containers/layouts/Election';
import { CandidateAPI, ElectionAPI, VoteAPI } from '@/api';
import CandidateCard from './components/CandidateCard';
import { ICandidate } from '@/models/candidate';
import VoteCard from './components/VoteCard';
import AlreadyVotedCard from './components/AlreadyVotedCard';
import { IElection } from '@/models/election';
import useStomp from '@/common/hooks/useStomp';
import { IMessage } from '@stomp/stompjs';
import { IVote } from '@/models/vote';

const ElectionPage = () => {
	const [candidates, setCandidates] = useState<ICandidate[]>([]);
	const [electionState, setElectionState] = useState<IElectionState>('solicit');
	const isElectionClosed = electionState == 'closed';

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
					<p class="flex flex-col md:flex-row mb-4">
						<span class="text-lg">The new mayor is:</span>
						<span class="text-4xl font-bold">#3 John Wick</span>
					</p>
				)}
			</div>
			<div class="flex flex-wrap px-3 md:px-6">
				{candidates.map(candidate => (
					<div class="w-full md:w-1/2 lg:w-1/4 md:px-6">
						<div class="w-full mx-auto my-6">
							<CandidateCard {...candidate} state={electionState} />
							<VoteCard id={candidate.id.toString()} onConfirm={handleVote} />
							<AlreadyVotedCard />
						</div>
					</div>
				))}
			</div>
		</ElectionLayout>
	);
};

export default ElectionPage;
