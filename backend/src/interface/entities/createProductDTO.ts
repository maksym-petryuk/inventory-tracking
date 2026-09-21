export interface ICreateProductDTO {
    name: string
    price: number
    barcode: string
    categoryId: string
    imageUrl: string
    description?: string
    attributes:{
        size?: number | string
        colorId?: number;
    }
}