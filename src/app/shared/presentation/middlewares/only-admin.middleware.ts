import { Request, Response, NextFunction } from "express";
import { Profile } from "../../domain/enums";
import { unauthorized } from "../http-helper";

export const onlyAdmin = (req: Request, res: Response, next: NextFunction) => {
    const profile = req.user.profile;

    if (profile != Profile.ADMIN) {
        return unauthorized(res, { success: false, error: "User not allowed" });
    }
    return next();
};
