import Card from '@/containers/components/Card';
import NationalIdInput from '@/containers/components/NationalIdInput';
import { FunctionComponent, JSX } from 'preact';
import { useCallback, useState } from 'preact/hooks';

export type IProps = {
	id: string;
	onConfirm?: (nationalId: string, candidateId: string) => void;
	onCancel?: () => void;
};

const VoteCard: FunctionComponent<IProps> = ({ id, onConfirm, onCancel }) => {
	const [disable, setDisable] = useState(true);
	const [nationalId, setNationalId] = useState('');

	const handleInputChange = (value: string) => {
		if (value.length === 13) {
			setNationalId(value);
			setDisable(false);
		} else {
			setNationalId('');
			setDisable(true);
		}
	};

	const handleConfirmClick = useCallback(
		(e: JSX.TargetedEvent<HTMLButtonElement>) => {
			e.preventDefault();
			onConfirm && onConfirm(nationalId, id);
		},
		[nationalId, id],
	);

	const handleCancelClick = (e: JSX.TargetedEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onCancel && onCancel();
	};

	return (
		<Card>
			<div>
				<p class="text-lg">Please enter your national ID to confirm your vote</p>
			</div>

			<div class="my-8">
				<NationalIdInput class="input input-bordered w-full max-w-xs" onChange={handleInputChange} />
			</div>

			<div class="flex space-x-4 flex-auto">
				<button
					type="button"
					class="btn btn-primary capitalize flex-1"
					data-testid="confirm-button"
					disabled={disable}
					onClick={handleConfirmClick}
				>
					Confirm
				</button>

				<button
					type="button"
					class="btn btn-outline btn-primary capitalize flex-1"
					data-testid="cancel-button"
					onClick={handleCancelClick}
				>
					Cancel
				</button>
			</div>
		</Card>
	);
};

export default VoteCard;
