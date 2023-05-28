import { Request, Response } from "express";
import { badRequest, ok } from "../../../../shared/presentation/http-helper";
import "dotenv/config";
import { CreateUserUseCase } from "../../domain/usecases";
import { CustomError } from "../../../../shared/errors";
import { ListUsersUseCase } from "../../domain/usecases/list-users.usecase";

export class UserController {
    async createUser(req: Request, res: Response) {
        const { name, email, profile, company } = req.body;
        const password = process.env.ADMIN_PASSWORD!;

        try {
            const useCase = new CreateUserUseCase();
            const user = await useCase.execute(
                {
                    name,
                    email,
                    profile,
                    company,
                    password,
                },
                req.user
            );

            if (!user) {
                return badRequest(res, {
                    success: false,
                    error: "Email already exists",
                });
            }

            return ok(res, { success: true, data: user });
        } catch (error: any) {
            if (error instanceof CustomError) {
                return badRequest(res, {
                    success: false,
                    error: error.message,
                });
            }
            throw error;
        }
        
    }

    async listUsers(req: Request, res: Response) {
        const useCase= new ListUsersUseCase();
        const users = await useCase.execute();
        return ok(res, { success: true, data: users });
    }
}
