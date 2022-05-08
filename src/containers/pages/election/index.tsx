import { useEffect, useState } from 'preact/hooks';

import { IElectionState } from '@/common/interfaces/election';
import ElectionLayout from '@/containers/layouts/Election';
import { CandidateAPI } from '@/api';
import CandidateCard from './components/CandidateCard';
import { ICandidate } from '@/models/candidate';

const ElectionPage = () => {
	const [candidates, setCandidates] = useState<ICandidate[]>([]);
	const [electionState] = useState<IElectionState>('voting');
	const isElectionClosed = electionState == 'closed';

	useEffect(() => {
		const call = async () => {
			const candidates = await CandidateAPI.find<ICandidate[]>();
			setCandidates(candidates);
		};
		call();
	}, []);

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
						</div>
					</div>
				))}
			</div>
		</ElectionLayout>
	);
};

export default ElectionPage;
