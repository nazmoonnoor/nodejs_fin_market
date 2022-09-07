import { create, getBySymbol, update } from "../../db/repository/stock.repository";
import { BadRequestError } from "../../utils/errorHandler";
import { IStock } from "../../db/models/stock";
import { CreateStockDTO, UpdateStockDTO } from "../dto/stock.dto";
import { getStockData } from "./stock.api.service";

const FIVE_MIN = 5 * 60 * 1000;

const getSymbolPrice = async (symbol: string): Promise<number> => {
	const response = await getStockData(symbol);
	const quote = response && response["Global Quote"];
	const price = quote && quote["05. price"];
	console.log({ price });
	return price;
};

export const getStock = async (symbol: string): Promise<IStock | null> => {
	if (!symbol) throw new BadRequestError(`Argument exception. Stock symbol was not provided.`);

	// get stock from db
	const stock = await getBySymbol(symbol);

	// stock is not available at db
	if (!stock) {
		// symbol is not available at db
		const price = await getSymbolPrice(symbol);
		const payload: CreateStockDTO = {
			symbol,
			price,
			updatedAt: new Date(),
		};

		const result = await create(payload);
		return result;
	}

	// stock is available at db
	const diff = new Date().valueOf() - new Date(stock.updatedAt).valueOf();
	if (diff > FIVE_MIN) {
		// symbol was updated more than 5 minutes ago
		const price = await getSymbolPrice(symbol);
		const payload: UpdateStockDTO = {
			symbol,
			price,
			updatedAt: new Date(),
		};

		// update and return updated price
		const result = await update(stock && stock._id.toString(), payload);
		return result;
	}

	// stock was updated less than 5 minutes ago, return from db
	return stock;
};
