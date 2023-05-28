import { BaseEntity, UserEntity, JobEntity } from ".";
import { CandidateJobEntity } from "./candidate-job.entity";


export * from './base-entity.entity';

export * from './user.entity';

export * from './job.entity';

export * from './candidate-job.entity'



export default [UserEntity, BaseEntity, JobEntity, CandidateJobEntity];