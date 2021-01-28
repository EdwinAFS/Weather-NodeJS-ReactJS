import React, { Fragment, useState } from "react";
import { Search } from "./components/Search";
import { WeatherCard } from "./components/WeatherCard";
import { useFetchWeather } from "./hooks/useFetchWeather";


export const App = ({ defaultWeather = null }) => {

	const [filter, setFilter] = useState(defaultWeather);

	const { data: weather, loading } = useFetchWeather( filter );

	return (
		<Fragment>
			<h2> Clima </h2>
			<hr />
			<div className='d-flex flex-column align-items-center'>
				<Search setFilter={setFilter}/>
				{ loading && <p className='animate__animated animate__lightSpeedInLeft'>Cargando...</p>}
				{ weather && <WeatherCard key={ weather._id } {...weather} /> }
				{ ! weather && <h3 className='mt-3'>No se encontro ciudad</h3>}
			</div>
		</Fragment>
	);
};
