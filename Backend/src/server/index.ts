import express, { Express } from "express";
import cors from 'cors';
import compression from "compression";
import helmet from "helmet";
import { ErrorMiddleware, NotFoundMiddleware } from '../middleware';

export default ({ routes } : { routes: any} ) => {

	const app: Express = express();

	app
		.use(express.json())
		.use(cors())
		.use(helmet())
		.use(compression());

	app.use(routes);

	app.use(NotFoundMiddleware);
	app.use(ErrorMiddleware);

	return app;

};
