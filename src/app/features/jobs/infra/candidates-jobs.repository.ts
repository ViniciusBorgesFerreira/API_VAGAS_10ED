import { CandidateJobStatus } from "../../../shared/domain/enums";
import { appDataSource } from "../../../shared/infra/db/data-source";
import { CandidateJobEntity } from "../../../shared/infra/db/entities";

interface ResponseCandidateJobRepository {
    count: number;
    candidateAlreadyExists: boolean;
}

export class CandidateJobRepository {
    private _repository = appDataSource.getTreeRepository(CandidateJobEntity);

    async getTotalAndCandidatesExists(
        idJob: string,
        idCandidate: string
    ): Promise<ResponseCandidateJobRepository> {
        const count = await this._repository.count({ where: { jobId: idJob } });

        const candidateAlreadyExists = await this._repository.findOne({
            where: { candidateId: idCandidate },
        });

        return {
            count,
            candidateAlreadyExists: !!candidateAlreadyExists,
        };
    }

    async saveCandidates(idJob: string, idCandidate: string): Promise<CandidateJobEntity>{
        const job = this._repository.create({jobId: idJob, candidateId: idCandidate, status: CandidateJobStatus.IN_PROCESS});

        await this._repository.save(job);
        return job;
    }

    
}
