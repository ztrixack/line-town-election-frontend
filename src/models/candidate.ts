export type ICandidate = {
	id: number;
	name: string;
	dob: Date;
	bioLink: string;
	imageLink: string;
	policy: string;
	votedCount: number;
	percentage?: string;
};
