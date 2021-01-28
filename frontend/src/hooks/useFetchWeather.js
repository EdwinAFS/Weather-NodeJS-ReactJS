import { useEffect, useState } from "react";
import { getWeatherByCity } from "../helpers/getWeatherByCity";

export const useFetchWeather = (city) => {
	const [state, setState] = useState({
		data: null,
		loading: true,
	});

	useEffect(() => {

		if( ! city ){
			return setState({
				data: null,
				loading: false,
			});
		}

		getWeatherByCity(city).then((weathers) => {
			console.log(weathers);
			setState({
				data: weathers,
				loading: false,
			});
		});
	}, [city]);

	return state;
};
