export const calculateAge = (birthday: Date) => {
	const ageDifMs = Date.now() - birthday.getTime();
	const ageDate = new Date(ageDifMs);
	return Math.max(0, ageDate.getUTCFullYear() - 1970);
};

export const calculateVote = (vote: number) => {
	switch (Math.floor((vote.toString().length - 1) / 3)) {
		case 0:
			return vote;
		case 1:
			return Math.floor(vote / 100) / 10 + 'K';
		case 2:
			return Math.floor(vote / 100000) / 10 + 'M';
		default:
			return 'uncountable';
	}
};
export const guidGenerator = () => {
	const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};
