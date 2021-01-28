import { Weather } from '../domain/Weather';
import { WeatherRepository } from '../domain/Weather.repository';

export class GetWeatherService {

	public weatherRepository: WeatherRepository;

	constructor( { WeatherRepository }: any ) {
		this.weatherRepository = WeatherRepository;
	}

	public async run( city: string ): Promise<Weather | undefined > {
		return await this.weatherRepository.find( city );
	}
}
