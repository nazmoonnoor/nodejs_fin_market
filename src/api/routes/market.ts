import { Router } from "express";
import MarketController from "../controllers/market";

const marketRouter = Router();

const stockController = new MarketController();

marketRouter.get("/:symbol", stockController.getStock);

export default marketRouter;
