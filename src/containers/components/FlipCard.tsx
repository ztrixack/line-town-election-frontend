import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import { useLocalStorage } from '@/common/hooks/useLocalStorage';
import { IElectionState } from '@/common/interfaces/election';
import { ICandidate } from '@/models/candidate';
import AlreadyVotedCard from '../pages/election/components/AlreadyVotedCard';
import CandidateCard from '../pages/election/components/CandidateCard';
import VoteCard from '../pages/election/components/VoteCard';

type IProps = ICandidate & {
	state: IElectionState;
	onConfirm: (nationalId: string, candidateId: string) => void;
};

const FlipCard: FunctionComponent<IProps> = ({ state, onConfirm, ...candidate }) => {
	const [isFlipCard, setFlipCard] = useState(false);
	const [, setNationalId] = useLocalStorage('nationalId', '');
	const [isVoted, setIsVoted] = useLocalStorage('isVoted', false);

	const handleFlip = () => {
		setFlipCard(() => true);
	};

	const handleFlipback = () => {
		setFlipCard(() => false);
	};

	const handleVote = (nationalId: string, candidateId: string) => {
		setIsVoted(true);
		setNationalId(nationalId);
		onConfirm(nationalId, candidateId);
	};

	return (
		<div
			class="w-full min-h-[320px] md:min-h-[450px]"
			style={{
				perspective: '500px',
			}}
		>
			<div
				class="absolute w-full h-full"
				style={{
					transition: 'transform 0.5s',
					transformStyle: 'preserve-3d',
					transform: isFlipCard ? 'rotateY(180deg)' : '',
				}}
			>
				<div
					class="absolute w-full h-full bg-white"
					style={{
						backfaceVisibility: 'hidden',
					}}
				>
					<CandidateCard {...candidate} state={state} onOpenVote={handleFlip} />
				</div>
				<div
					class="absolute w-full h-full bg-white"
					style={{
						backfaceVisibility: 'hidden',
						transform: 'rotateY(180deg)',
					}}
				>
					{isVoted ? (
						<AlreadyVotedCard onDone={handleFlipback} />
					) : (
						<VoteCard candidateId={candidate.id} onConfirm={handleVote} onCancel={handleFlipback} />
					)}
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
