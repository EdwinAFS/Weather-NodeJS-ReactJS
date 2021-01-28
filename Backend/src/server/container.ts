import { createContainer, asClass, asValue, asFunction, AwilixContainer } from 'awilix';

// routes
import HomeRoutes from '../routes/home.routes';
import WeatherRoutes from '../routes/weather.routes';
import routes from '../routes';

// application
import { GetWeatherService } from '../components/weather/application/GetWeatherService';

// Controllers
import { HomeController } from '../components/home/infrastructure/home.controller';
import { WeatherController } from '../components/weather/infrastructure/weather.controller';
import app from './index';

// Repository
import { WeatherMockRepository } from '../components/weather/infrastructure/database/mock/Weather.repository';

// Container
const container: AwilixContainer = createContainer();

container
	// General
	.register({
		routes: asFunction(routes).singleton(),
		app: asFunction(app).singleton(),
	})
	// Controller
	.register({
		HomeController: asClass(HomeController.bind(HomeController)).singleton(),
		WeatherController: asClass(WeatherController.bind(WeatherController)).singleton()
	})
	// Repository
	.register({
		WeatherRepository: asClass( WeatherMockRepository ).singleton()
	})
	// Application
	.register({
		GetWeatherService: asClass(GetWeatherService.bind(GetWeatherService)).singleton()
	})
	// Routes
	.register({
		HomeRoutes: asFunction( HomeRoutes ).singleton(),
		WeatherRoutes: asFunction( WeatherRoutes ).singleton()
	});


export default container;