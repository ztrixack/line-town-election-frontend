export const validateNationalId = (id: string) => {
	if (id.length != 13) return false;
	let sum = 0;

	for (let i = 0; i < 12; i++) {
		sum += parseInt(id.charAt(i)) * (13 - i);
	}

	const mod = sum % 11;
	const check = (11 - mod) % 10;
	if (check == parseInt(id.charAt(12))) {
		return true;
	}

	return false;
};
