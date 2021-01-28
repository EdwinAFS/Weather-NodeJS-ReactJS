import { GetWeatherService } from "../application/GetWeatherService";
import { Weather } from "../domain/Weather";
import { Request, Response } from "express";
import httpStatus from "http-status";

export class WeatherController {
	getWeatherService: GetWeatherService;

	constructor({ GetWeatherService }: any) {
		this.getWeatherService = GetWeatherService;
	}

	findByCity = async (req: Request, res: Response) => {

		const { city } = req.params;

		const response: Weather | undefined = await this.getWeatherService.run( city );

		if( ! response ){
			res.status(httpStatus.NOT_FOUND).send({
				weather: response
			});
			return;
		}

		res.status(httpStatus.OK).send({
			weather: response
		});

	};
}
