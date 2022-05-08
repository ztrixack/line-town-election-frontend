import { toNationalIdPresent } from '@/utils/convert';
import { FunctionComponent, JSX } from 'preact';
import { useCallback, useRef, useState } from 'preact/hooks';

type IProps = {
	class?: string;
	onChange?: (val: string) => void;
};

const NationalIdInput: FunctionComponent<IProps> = ({ class: className, onChange }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');

	const handleInputChange = useCallback(
		(e: JSX.TargetedEvent<HTMLInputElement>) => {
			if (!inputRef.current) return;

			const presentValue = toNationalIdPresent(e.currentTarget.value);
			if (!presentValue) return;

			inputRef.current.value = presentValue;
			const numbers = presentValue.replace(/(\D)/g, '');
			onChange && onChange(numbers);
			setValue(presentValue);
		},
		[inputRef, onChange],
	);

	return (
		<input
			class={className}
			data-testid="national-id-input"
			autocomplete="off"
			placeholder="x-xxxx-xxxxx-xx-x"
			onInput={handleInputChange}
			ref={inputRef}
			value={value}
			required
		/>
	);
};

export default NationalIdInput;
