import { Router } from "express";

export default ({ HomeRoutes, WeatherRoutes } : any) => {

	const router: Router = Router();
	const apiRouter: Router = Router();

	apiRouter.use('/', HomeRoutes);
	apiRouter.use('/weather', WeatherRoutes);

	router.use('/v1/api', apiRouter);

	return router;
};
