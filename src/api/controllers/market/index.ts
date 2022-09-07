import { Request, Response } from "express";
import * as mapper from "./mapper";
import BaseController from "../base.controller";
import { getStock } from "../../services/stock.service";

export default class StockController extends BaseController {
	/** Gets a stock
	 * @param  {Request} req    express request parameter
	 * @param  {Response} res    express response parameter
	 */
	getStock = async (req: Request, res: Response) => {
		const { symbol } = req.params;

		try {
			const response = await getStock(symbol);
			if (response) {
				const stock = mapper.toStock(response);
				res.status(this.httpStatusCodes.OK).json({ stock });
			}
		} catch (err: any) {
			this.logger.error(err);
			res.status((err && err.statusCode) || this.httpStatusCodes.INTERNAL_SERVER).json({
				err,
			});
		}
	};
}
