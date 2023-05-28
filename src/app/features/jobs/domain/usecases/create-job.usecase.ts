import { AuthUserDTO } from "../../../../shared/domain/dtos";
import { JobDetailDTO } from "../../../../shared/domain/dtos/job.dto";
import { Profile } from "../../../../shared/domain/enums";
import { CustomError } from "../../../../shared/errors";
import { JobRepository } from "../../infra";
import { CreateFullJobDTO, CreateJobDTO } from "../dtos";

export class CreateJobUseCase {
    async execute(
        createJob: CreateJobDTO,
        authUser: AuthUserDTO
    ): Promise<JobDetailDTO> {
        if (authUser.profile !== Profile.RECRUITER) {
            throw new CustomError("User is not a RECRUITER");
        }
        const repository = new JobRepository();
        const job = await repository.createJob({
            ...createJob,
            idRecruiter: authUser.id,
            open: true,
            companyName: authUser.company!
        });
        
        return job;
    }
}
