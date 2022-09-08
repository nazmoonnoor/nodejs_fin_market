import dotenv from "dotenv";
import app from "../app";
import supertest from "supertest";
const request = supertest(app);
import Stock, { IStock } from "../../db/models/stock";
import { DbOperationError } from "../../utils/errorHandler";
import mongoose from "mongoose";

const preReq = async () => {
	try {
		const stock = new Stock({
			symbol: "IBM",
			price: 125.5,
			updatedAt: new Date(),
		});
		return await stock.save();
	} catch (err: any) {
		throw new DbOperationError(`${err.name}: ${err.message}`);
	}
};
preReq();

beforeAll(() => {
	dotenv.config();
	process.env.NODE_ENV = "test";
	const mongo_url = process.env.MONGODB_TEST_CONNECTION || "";
	mongoose
		.connect(mongo_url, { retryWrites: true, w: "majority" })
		.then((t) => console.log("Mongoose connected for testing!"));
});

afterAll(async () => {
	await mongoose.disconnect();
});

describe("GET / get stock endpoint", () => {
	it("expect stock price", async () => {
		await request.get("/api/v1/market/IBM").then((result) => {
			// console.log(result.body);
			// expect(result.body.stock).toBeGreaterThan(0);
			expect(result.statusCode).toEqual(200);
		});
	});
});
