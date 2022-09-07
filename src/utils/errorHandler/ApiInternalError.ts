import { httpStatusCodes } from "../httpStatusCodes";
import { BaseError } from "./BaseError";

export class ApiInternalError extends BaseError {
	constructor(
		error: string,
		statusCode: number = httpStatusCodes.INTERNAL_SERVER,
		description = "Internal server error",
		isOperational = true
	) {
		super(error, statusCode, isOperational, description);
	}
}
