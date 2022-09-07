import { httpStatusCodes } from "../httpStatusCodes";
import { BaseError } from "./BaseError";

export class DbOperationError extends BaseError {
	constructor(
		error: string,
		statusCode: number = httpStatusCodes.INTERNAL_SERVER,
		description = "Internal server thrown an exception!",
		isOperational = false
	) {
		super(error, statusCode, isOperational, description);
	}
}
