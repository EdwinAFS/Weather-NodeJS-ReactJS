export const getWeatherByCity = async ( city ) => {
	const url = `http://localhost:4000/v1/api/weather/${city}`;

	const response = await fetch(url);
	const { weather } = await response.json();
	return weather;
}