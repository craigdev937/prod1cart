export interface IData {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
};

export interface IProd {
    products: IData[],
    total: number,
    skip: number,
    limit: number
};



