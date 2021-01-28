import { HomeController } from './../components/home/infrastructure/home.controller';
import { Router } from 'express';

const route = ( { HomeController }: { HomeController: HomeController} ): Router => {

	const router: Router = Router();

	router.get('/', HomeController.index)

	return router;

}

export default route;


