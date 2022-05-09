import { FunctionComponent, JSX } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import Card from '@/containers/components/Card';
import NationalIdInput from '@/containers/components/NationalIdInput';
import { validateNationalId } from '@/utils/validate';

export type IProps = {
	candidateId: string;
	onConfirm?: (nationalId: string, candidateId: string) => void;
	onCancel?: () => void;
};

const VoteCard: FunctionComponent<IProps> = ({ candidateId, onConfirm, onCancel }) => {
	const [error, setError] = useState(false);
	const [disable, setDisable] = useState(true);
	const [nationalId, setNationalId] = useState('');

	const handleInputChange = (value: string) => {
		if (validateNationalId(value)) {
			setNationalId(value);
			setDisable(false);
		} else {
			setNationalId('');
			setDisable(true);
			if (value.length == 13) {
				setError(true);
			}
		}
	};

	const handleConfirmClick = useCallback(
		(e: JSX.TargetedEvent<HTMLButtonElement>) => {
			e.preventDefault();
			onConfirm && onConfirm(nationalId, candidateId);
		},
		[nationalId, candidateId],
	);

	const handleCancelClick = (e: JSX.TargetedEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onCancel && onCancel();
	};

	return (
		<Card>
			<div>
				<p class="text-xl mx-2">Please enter your national ID to confirm your vote</p>
			</div>

			<div class="my-8">
				<NationalIdInput class="input input-bordered w-full max-w-xs" onChange={handleInputChange} />
				{error && <span class="text-xs text-red-700">Please input correct national ID</span>}
			</div>

			<div class="flex flex-auto items-end space-x-4 mb-2">
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
