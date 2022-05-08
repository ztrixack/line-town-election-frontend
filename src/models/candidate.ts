import { IElectionState } from '@/common/interfaces/election';

export type ICandidate = {
	id: number;
	name: string;
	dob: Date;
	imageLink: string;
	policy: string;
	votedCount: number;
	percentage?: string;
	state?: IElectionState;
};
