import express from "express";
import { CandidateJobController, JobsController } from "../controllers";
import { auth } from "../../../../shared/presentation/middlewares";
import { applyJobValidator, createJobValidator } from "../middlewares";


export default () => {
    const router = express.Router();

    router.post(
        "/jobs",
        auth,
        createJobValidator,
        new JobsController().createJob
    );
    router.post("/jobs/:id/apply",auth, applyJobValidator,new CandidateJobController().apply);

    return router;
};
