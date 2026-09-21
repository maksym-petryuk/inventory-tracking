import type {IStock} from "./stock.js";

interface IClient {
    name: string;
    number: string;
    address: string;
}
interface IPost {
    post: Post
    index: number
}
type Post = 'укр' | 'нова'
type Status = 'отримано' | 'відправлено' |'скасовано' | 'оформлено'

export interface IOrderItem {
    id:string;
    barcode:string;
    name: string;
    price: number;
    quantity: number;
}

export interface IOrder {
    id: string;
    client: IClient
    products: IOrderItem[]
    price: number
    post: IPost
    status: Status
    date: Date
}
