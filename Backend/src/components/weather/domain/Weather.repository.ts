import { Weather } from "./Weather";

export interface WeatherRepository {
	find(ciudad: string): Promise<Weather | undefined>;
}
