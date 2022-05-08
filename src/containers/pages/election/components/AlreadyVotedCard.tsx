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
			<div class="">
				<p class="">You have already voted</p>
			</div>

			<div class="flex flex-col space-x-4">
				<button type="button" class="btn btn-primary" data-testid="done-button" onClick={handleDoneClick}>
					Confirm
				</button>
			</div>
		</Card>
	);
};

export default AlreadyVotedCard;
