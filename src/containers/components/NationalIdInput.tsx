import { FunctionComponent, JSX } from 'preact';
import { useCallback, useRef, useState } from 'preact/hooks';

import { toNationalIdPresent } from '@/utils/convert';

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

			if (e.currentTarget.value.length == 0) {
				setValue('');
				return;
			}

			const presentValue = toNationalIdPresent(e.currentTarget.value);
			if (!presentValue) {
				inputRef.current.value = '';
				return;
			}

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
