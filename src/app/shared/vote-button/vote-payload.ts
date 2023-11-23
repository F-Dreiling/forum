import { VoteType } from './vote-type';

export class VotePayload {
    voteType: VoteType = VoteType.undefined;
    postId: number = 0;
}