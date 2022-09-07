export class BaseError extends Error {
	error: string;

	statusCode: number;

	isOperational: boolean;

	description: string;

	constructor(error: string, statusCode: number, isOperational: boolean, description: string) {
		super(description);

		Object.setPrototypeOf(this, new.target.prototype);
		this.error = error;
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		this.description = description;

		Error.captureStackTrace(this);
	}
}
