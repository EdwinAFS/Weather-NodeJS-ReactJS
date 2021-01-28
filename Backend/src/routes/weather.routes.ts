import { Router } from 'express';

const route = ( { WeatherController }: any ): Router => {

	const router: Router = Router();

	router.get('/:city', WeatherController.findByCity);

	return router;

}

export default route;


