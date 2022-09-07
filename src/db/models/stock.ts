import mongoose, { Schema, Types } from "mongoose";

// Create an interface representing a document in MongoDB.
export interface IStock {
	_id?: any;
	symbol: string;
	price: number;
	updatedAt: Date;
}

const stockSchema: Schema = new Schema<IStock>(
	{
		symbol: {
			type: String,
			required: true,
			unique: true,
		},
		price: {
			type: Number,
			required: true,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
	}
);

const Stock = mongoose.model<IStock>("Stock", stockSchema);

export default Stock;
