import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const getStockData = async (symbol: string): Promise<any> => {
	const API_KEY = process.env.API_KEY || "";
	const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

	const response = await axios.get(url);
	return response.data;
};
