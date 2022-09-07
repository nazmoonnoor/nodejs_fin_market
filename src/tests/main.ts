import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from "../utils/logger";

dotenv.config();
const port = process.env.PORT || 1337;
const mongo_url = process.env.MONGODB_TEST_CONNECTION || "";

/** Connect to Mongo **/
mongoose
	.connect(mongo_url, { retryWrites: true, w: "majority" })
	.then(() => {
		logger.info("Mongo connected!");
	})
	.catch((error) => {
		logger.error(error);
	});

const a = app.listen(port, () => {
	console.log(`We have been launched on port: ${port}.`);
});

export default a;
