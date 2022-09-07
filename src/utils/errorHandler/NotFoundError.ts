import { httpStatusCodes } from "../httpStatusCodes";
import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
	constructor(
		error: string,
		statusCode: number = httpStatusCodes.NOT_FOUND,
		description = "Not found!",
		isOperational = false
	) {
		super(error, statusCode, isOperational, description);
	}
}
