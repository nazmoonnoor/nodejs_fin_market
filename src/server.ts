import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import logger from "./utils/logger";
import routes from "./api/routes";

dotenv.config();

const app = express();

const port = process.env.PORT || 1337;
const mongoUrl = process.env.MONGODB_CONNECTION || "";

/** Connect to Mongo * */
mongoose
	.connect(mongoUrl, { retryWrites: true, w: "majority" })
	.then(() => {
		logger.info("Mongo connected!");
		StartServer();
	})
	.catch((error) => {
		logger.error(error);
	});

/** Connect to server if db connects */
const StartServer = () => {
	/** Log the request */
	app.use((req, res, next) => {
		/** Log the req */
		logger.info(
			`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
		);

		res.on("finish", () => {
			/** Log the res */
			logger.info(
				`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
			);
		});

		next();
	});

	// Middleware: body-parser
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.use("/api/v1", routes);

	// 404 error handling
	app.use(notFoundHandler);

	// Error handler
	app.use(errorHandler);

	/** Healthcheck */
	app.get("/ping", (req, res, next) => res.status(200).json({ server: true }));
};

app.listen(port, () => {
	logger.info(`App is running on port: ${port}`);
});
