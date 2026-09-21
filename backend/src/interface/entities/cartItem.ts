

export interface ICart {
    id:string;
    items:ICartItem[];
    total:number;
}

export interface ICartItem{
    id:string;
    barcode:string;
    name: string;
    price: number;
    quantity: number;
}
