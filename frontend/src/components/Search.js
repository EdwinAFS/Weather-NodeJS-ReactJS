import React, { useState } from "react";
import PropTypes from "prop-types";

export const Search = ({ setFilter }) => {

	const [searchInput, setSearchInput] = useState('');

	const handleChangeFilter = (e) => {
		setSearchInput(e.target.value);
	}

	const handleSubmit = ( e ) => {
		e.preventDefault();

		if( searchInput.trim().length < 2){
			return;
		}

		setFilter( searchInput );
	}

	return (
		<form onSubmit={handleSubmit} className='col-5 p-0'>
			<input
				className='input'
				type="text"
				className="form-control" 
				placeholder="Buscar..."
				value={searchInput}
				onChange={handleChangeFilter}
			/>
		</form>
	);
};

Search.propTypes = {
	setFilter: PropTypes.func.isRequired
}