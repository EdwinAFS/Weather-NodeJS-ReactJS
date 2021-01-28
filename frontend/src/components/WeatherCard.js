import React from "react";
import PropTypes from "prop-types";

export const WeatherCard = ({ city, humidity, temperature, velocity }) => {
	return (
		<div className="card mt-3 text-center p-3 col-5">
			<span className="icon">
				<img
					className="img-fluid"
					src="https://img.icons8.com/emoji/96/000000/sun-emoji.png"
				/>
			</span>
			<div className="title">
				<p>{city}</p>
			</div>
			<div className="temp">
				<h2>{temperature}<sup>&deg;</sup></h2>
			</div>
			<div className="row justify-content-md-center">
			</div>
			<div className="row">
				<div className="col">
					<div className="header">Humedad</div>
					<div className="value">{humidity}</div>
				</div>
				<div className="col">
					<div className="header">Velocidad</div>
					<div className="value">{velocity}</div>
				</div>
			</div>
		</div>
	);
};

WeatherCard.propTypes = {
	city: PropTypes.string.isRequired,
	humidity: PropTypes.string.isRequired,
	temperature: PropTypes.string.isRequired,
	velocity: PropTypes.string.isRequired,
};
