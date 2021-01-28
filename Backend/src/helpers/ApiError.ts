import HttpStatus from 'http-status';

class ApiError extends Error {

	status: Number;

	constructor(status: Number, ...params: any ){
		super(...params);
		this.status = status;
	}
}

export default ApiError;