// import app from "../app";
// import supertest from "supertest";
// const request = supertest(app);
// import Stock, {IStock} from "../../db/models/stock";
// import {DbOperationError} from "../../utils/errorHandler";

// const preReq = async () => {
//     try {
//         const stock = new Stock({
//             symbol: "IBM",
//             price: 125.5,
//             updatedAt: new Date()
//         });
//         return await stock.save();
//     } catch (err: any) {
//         throw new DbOperationError(`${err.name}: ${err.message}`);
//     }
// };
// preReq();
// describe("GET / get stock endpoint",  () => {
//     it("The endpoint returns all users", () => {
//         request.get("/api/v1/market/IBM").then((result)=>{
//             console.log(result.body);
//             // expect(result.body.stock).toBeGreaterThan(0);
//             expect(result.statusCode).toEqual(200);
//         });
//     });
// });
