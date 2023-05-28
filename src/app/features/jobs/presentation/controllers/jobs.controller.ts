import { Request, Response } from "express";
import { CreateJobUseCase } from "../../domain/usecases";
import { badRequest, ok } from "../../../../shared/presentation/http-helper";

export class JobsController {
    async createJob(req: Request, res: Response) {
        const { description, limitDate, maxCandidates } = req.body;
        const useCase = new CreateJobUseCase();

        try {
            const auth = req.user;
            const job = await useCase.execute(
                { description, limitDate, maxCandidates },
                auth,
            );

            return ok(res, { success: true, data: job });
        } catch (error: any) {
            return badRequest(res, { success: false, error: error.message });
        }
    }
}
