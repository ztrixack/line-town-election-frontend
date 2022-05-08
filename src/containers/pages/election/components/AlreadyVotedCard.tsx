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
			<div class="flex flex-col space-y-4 justify-center mx-auto">
				<p class="text-3xl">You have already voted</p>
				<button type="button" class="btn btn-primary" data-testid="done-button" onClick={handleDoneClick}>
					Done
				</button>
			</div>
		</Card>
	);
};

export default AlreadyVotedCard;
