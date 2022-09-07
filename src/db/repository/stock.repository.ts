import { DbOperationError } from "../../utils/errorHandler";
import Stock, { IStock } from "../models/stock";

export const create = async (payload: IStock): Promise<IStock> => {
	try {
		const stock = new Stock({
			symbol: payload && payload.symbol,
			price: payload && payload.price,
			updatedAt: payload && payload.updatedAt,
		});
		return await stock.save();
	} catch (err: any) {
		throw new DbOperationError(`${err.name}: ${err.message}`);
	}
};

export const update = async (id: string, payload: Partial<IStock>): Promise<IStock | null> => {
	try {
		return await Stock.findOne({ _id: id }).then((stock) => {
			if (stock) {
				stock.set(payload);
				return stock.save();
			}
			throw new Error("not found!");
		});
	} catch (err: any) {
		throw new DbOperationError(`${err.name}: ${err.message}`);
	}
};

export const getBySymbol = async (symbol: string): Promise<IStock | null> => {
	try {
		return await Stock.findOne({ symbol });
	} catch (err: any) {
		throw new DbOperationError(`${err.name}: ${err.message}`);
	}
};
