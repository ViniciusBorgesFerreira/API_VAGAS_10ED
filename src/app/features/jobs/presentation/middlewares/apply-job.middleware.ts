import { NextFunction, Request, Response } from "express";
import { unauthorized } from "../../../../shared/presentation/http-helper";
import { Profile } from "../../../../shared/domain/enums";

export const applyJobValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.user.profile !== Profile.CANDIDATE) {
        return unauthorized(res, {
            success: false,
            error: "Only candidates can apply a job!",
        });
    }

    return next();
};
