import dotenv from "dotenv";
import axios from "axios";
import logger from "../../utils/logger";
import { ApiInternalError } from "../../utils/errorHandler/ApiInternalError";

dotenv.config();

export const getStockData = async (symbol: string): Promise<any> => {
	const API_KEY = process.env.API_KEY || "";
	const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

	try {
		const response = await axios.get(url);
		return response.data;
	} catch (err: any) {
		logger.error(err);
		throw new ApiInternalError("Stock API throws an exception internally.");
	}
};
