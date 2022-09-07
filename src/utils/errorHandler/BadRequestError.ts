import { httpStatusCodes } from "../httpStatusCodes";
import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
	constructor(
		error: string,
		statusCode: number = httpStatusCodes.BAD_REQUEST,
		description = "Bad request!",
		isOperational = false
	) {
		super(error, statusCode, isOperational, description);
	}
}
