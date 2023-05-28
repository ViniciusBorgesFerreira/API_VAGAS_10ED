import { Column, Entity, OneToMany } from 'typeorm';
import { Profile } from '../../../domain/enums';
import { CandidateJobEntity } from './candidate-job.entity';
import { BaseEntity } from './base-entity.entity';
import { JobEntity } from './job.entity';

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column({ type: "enum", enum: Profile })
    profile!: Profile;

    @Column()
    password!: string;

    @Column()
    company!: string;

    @OneToMany(() => JobEntity, (entity) => entity.recruiter)
    jobs!: JobEntity[];

    @OneToMany(() => CandidateJobEntity, (entity) => entity.candidate)
    candidatesJob!: CandidateJobEntity[];
}