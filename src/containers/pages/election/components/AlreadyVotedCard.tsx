import Card from '@/containers/components/Card';
import { FunctionComponent, JSX } from 'preact';

export type IProps = {
	onDone?: () => void;
};

const AlreadyVotedCard: FunctionComponent<IProps> = ({ onDone }) => {
	const handleDoneClick = (e: JSX.TargetedEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onDone && onDone();
	};

	return (
		<Card>
			<div class="flex flex-auto flex-col space-y-8 justify-center mx-auto">
				<p class="text-3xl md:text-xl text-center">You have already voted</p>
				<button type="button" class="btn btn-primary w-28 mx-auto" data-testid="done-button" onClick={handleDoneClick}>
					Done
				</button>
			</div>
		</Card>
	);
};

export default AlreadyVotedCard;
