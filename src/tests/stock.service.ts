// import { getStock } from "../api/services/stock.service";
// import * as stockRepo from "../db/repository/stock.repository";
// import { BadRequestError } from "../utils/errorHandler";

// beforeEach(() => {
// 	jest.resetAllMocks();
// });

// jest.setTimeout(30000);

// describe("Stock Service", () => {
// 	//describe("Get stock", () => {
// 	it("calls without symbol", async () => {
// 		let res = await getStock("IBM");

// 		const expectedStock = {
// 			symbol: "IBM",
// 			price: 125.4,
// 			updatedAt: new Date(),
// 		};

// 		jest.mock("../db/repository/stock.repository");

// 		const spy = jest.spyOn(stockRepo, "getBySymbol");
// 		spy.mockResolvedValue(expectedStock);

// 		spy.mockImplementation((e) => Promise.resolve(expectedStock));
// 		//console.log(res);
// 		expect(stockRepo.getBySymbol("IBM")).toEqual(Promise.resolve(expectedStock)); // Success!

// 		//expect(stockRepo.getBySymbol("IBM")).toEqual(Promise.resolve(expectedStock));
// 		spy.mockRestore();
// 	});
// 	//});
// });
