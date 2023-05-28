import express from "express";
import { createUserValidator } from "../middlewares/create-user-validator.middleware";
import { auth, onlyAdmin } from "../../../../shared/presentation/middlewares";
import { UserController } from "../controllers";
import { CandidateController } from "../controllers/candidate.controller";
import { createCandidateValidator } from "../middlewares";

export default () => {
    const router = express.Router();

    router.post(
        "/users",
        auth,
        onlyAdmin, 
        createUserValidator,
        new UserController().createUser
    );
    router.get("/users", auth, onlyAdmin, new UserController().listUsers);

    router.post(
        "/candidates",
        createCandidateValidator,
        new CandidateController().createCandidate
    );
    //router.get('/candidates', auth, permission, new CandidateController().listCandidates);

    return router;
};
