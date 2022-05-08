export const toNationalIdPresent = (input: string) => {
	const value = input.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,5})(\d{0,2})(\d{0,1})/);
	if (!value) return;

	return !value[2]
		? value[1]
		: `${value[1]}-${value[2]}${`${value[3] ? `-${value[3]}` : ''}`}${`${value[4] ? `-${value[4]}` : ''}`}${`${
				value[5] ? `-${value[5]}` : ''
		  }`}`;
};
