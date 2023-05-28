import { Express, Request, Response} from 'express';
import userRoutes from '../../app/features/users/presentation/routes/userRoutes';
import loginRoutes from '../../app/features/authentication/presentation/routes/auth.routes';
import jobsRoutes from '../../app/features/jobs/presentation/routes/jobsRoutes';


export default (app: Express) => {
    app.get('/', (req: Request, res: Response) => res.status(200).json('API is running'));
    app.use(userRoutes());
    app.use(loginRoutes());
    app.use(jobsRoutes());   
    
}

