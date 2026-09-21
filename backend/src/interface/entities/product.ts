export interface IProduct {
    id: string
    name: string
    price: number
    discount?: number
    barcode: string
    categoryId: string
    imageUrl: string
    description?: string
    attributes:{
        size?: number | string
        colorId?: number;
    }
}

