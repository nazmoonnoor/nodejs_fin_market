import Joi from "joi";
import { User } from "../interfaces";

export const Validator = {
	user: {
		create: Joi.object<User>({
			name: Joi.string().required(),
			email: Joi.string().required(),
		}),
		update: Joi.object<User>({
			name: Joi.string().optional(),
			email: Joi.string().optional(),
		}),
	},
};
