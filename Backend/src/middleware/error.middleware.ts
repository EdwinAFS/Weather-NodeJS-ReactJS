import { Request, Response } from "express";

export const ErrorMiddleware = (err: any , req: Request, res: Response, next: any) => {
	const httpStatus: number = err.status || 500;
	return res.status(httpStatus).send({status: httpStatus, message: err.message || "Internal server error"});
}
