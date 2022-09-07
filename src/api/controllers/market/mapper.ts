import { Stock } from "../../interfaces";
import { IStock } from "../../../db/models/stock";

export const toStock = (stock: IStock): Stock => {
    return {
        // id: stock.id,
        symbol: stock.symbol,
        price: stock.price,
        updatedAt: stock.updatedAt,
    };
};
