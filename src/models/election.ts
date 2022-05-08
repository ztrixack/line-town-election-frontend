import { IElectionState } from '@/common/interfaces/election';

export type IElection = {
	enable: boolean;
	state: IElectionState;
};
