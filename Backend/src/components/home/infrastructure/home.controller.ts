import { Request, Response } from "express";
import httpStatus from "http-status";

export class HomeController {
	constructor() {}

	async index(_req: Request, res: Response) {
		res.status(httpStatus.OK).send({
			message: 'Home Controller!!!'
		});
	}
}
