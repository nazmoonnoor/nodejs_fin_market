export type CreateStockDTO = {
    symbol: string;
    price: number;
    //createdAt: Date;
    updatedAt: Date;
    //deletedAt: Date;
};

export type UpdateStockDTO = CreateStockDTO;

export type FilterStocksDTO = {
    isDeleted?: boolean;
    includeDeleted?: boolean;
};
