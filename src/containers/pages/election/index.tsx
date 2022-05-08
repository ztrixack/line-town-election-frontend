import { useState } from 'preact/hooks';

import { IElectionState } from '@/common/interfaces/election';
import ElectionLayout from '@/containers/layouts/Election';
import VoteCard from './components/VoteCard';

const mockups = [...Array(8)].fill(0);

const ElectionPage = () => {
	const [electionState] = useState<IElectionState>('voting');
	const isElectionClosed = electionState == 'closed';

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
				{mockups.map(() => (
					<div class="w-full md:w-1/2 lg:w-1/4 md:px-6">
						<div class="w-full mx-auto my-6">
							<VoteCard
							// id={index}
							// name="John Wick"
							// state={electionState}
							// dob={new Date('June 28, 1971')}
							// imageLink="http://placekitten.com/600/600"
							// policy="Choose me if your don't know who to choose"
							// votedCount={1195}
							// percentage="75%"
							/>
						</div>
					</div>
				))}
			</div>
		</ElectionLayout>
	);
};

export default ElectionPage;
