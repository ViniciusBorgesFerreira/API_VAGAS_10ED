import { CustomError } from "../../../../shared/errors";
import { CandidateJobRepository, JobRepository } from "../../infra";

export class ApplyJobUseCase {
    async execute(idJob: string, idCandidate: string) {
        const jobRepository = new JobRepository();
        const candidateJobRepository = new CandidateJobRepository();

        const job = await jobRepository.getJob(idJob);

        if (!job) {
            throw new CustomError("Job is not found");
        }

        if (job.limitDate.getTime() < new Date().getTime()) {
            throw new CustomError("Max limit date exceeded");
        }

        if (!job.open) throw new CustomError("Job is closed");

        const { count, candidateAlreadyExists } =
            await candidateJobRepository.getTotalAndCandidatesExists(
                idJob,
                idCandidate
            );

        if (candidateAlreadyExists)
            throw new CustomError("Candidate Already Registered");

        if (job.maxCandidates && count >= job.maxCandidates)
            throw new CustomError("Job max candidates exceeded");

        return candidateJobRepository.saveCandidates(idJob, idCandidate);
    }
}
