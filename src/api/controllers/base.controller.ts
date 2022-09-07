import winston from "winston";
import logger from "../../utils/logger";
import { httpStatusCodes } from "../../utils/httpStatusCodes";

export default class BaseController {
	protected logger: winston.Logger;

	protected httpStatusCodes;

	constructor() {
		this.logger = logger;
		this.httpStatusCodes = httpStatusCodes;
	}
}
