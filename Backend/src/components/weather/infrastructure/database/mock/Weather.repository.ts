import { Weather } from "../../../domain/Weather";
import { WeatherRepository } from "../../../domain/Weather.repository";

export class WeatherMockRepository implements WeatherRepository {

	weathers = [
		{
			_id: "Object('5eadf186bfa7ef1c74169c90')",
			city: 'Cali',
			humidity: 55,
			temperature: 24,
			velocity: 22
		},
		{
			_id: "Object('5eadf186bfa7ef1c741asda90')",
			city: 'Bogota',
			humidity: 22,
			temperature: 10,
			velocity: 30
		}
	] as Weather[];

	async find(city: string): Promise<Weather | undefined> {
		return this.weathers.find( weather =>  weather.city == city );
	}
}

