import { Request, Response, NextFunction } from "express";
import { unauthorized } from "../http-helper";
import { JwtToken } from "../../adapters/jwt";
import { TokenError } from "../../domain/errors";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return unauthorized(res, { success: false, error: "Invalid token" });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
        return unauthorized(res, { success: false, error: "Invalid token" });
    }

    try {
        const auth = new JwtToken().verify(token);
        req.user = {
            id: auth.id,
            profile: auth.profile,
            company: auth.company            
        };
        return next();
    } catch (error) {
        if (error instanceof TokenError) {
            return unauthorized(res, {
                success: false,
                error: "Invalid token",
            });
        }
        throw error;
    }
};
