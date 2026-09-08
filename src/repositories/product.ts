import type {IProduct} from "../interface/product.js";

let products: IProduct[]  = [
    {
        id: 'cvvd',
        name: "7r668",
        price: 100,
        barcode: '11',
        categoryId: 'Футболка',
            imageUrl: 'dsgfhjkl.lkjfhdgh',
        attributes:{}
    },
    {
        id: 'cfbfgt7i',
        name: "sdgfhn",
        price: 100,
        barcode: 'sdgfthfhzdccdddy8744',
        categoryId: 'Футболка',
        imageUrl: 'rthtyhtyhyhyhy',
        attributes:{}
    }

    ]


export class ProductRepository {

    async getAllProduct(): Promise<IProduct[]> {
       return  products;
    }

    async getProduct(barcode: string): Promise<IProduct | null> {
        const product = products.find((product) => product.barcode === barcode);
        if (!product) {
            return null;
        }
        return product
    }
// не поторібно більше
    // async createProduct({ name, barcode, imageUrl, categoryId, price, attributes }:IProduct  ): Promise<IProduct> {
    //     const prod : IProduct = {
    //         name,
    //         barcode,
    //         imageUrl,
    //         categoryId,
    //         price,
    //         attributes
    //     }
    //     products.push(prod);
    //     return prod;
    // }

    async save(product: IProduct): Promise<void> {
        products.push(product);
    }

    async findByBarcode(barcode: string): Promise<IProduct | undefined> {
        return  products.find(prod => prod.barcode === barcode)
    }

    // async updateQuantity(barcode: string, addedQuantity?:number): Promise<IProduct | null> {
    //
    //     const product = products.find(products => products.barcode === barcode)
    //         if (!product) {
    //             return null;
    //         }
    //
    //     if (product.quantity === undefined) {
    //         product.quantity = 0;
    //     }
    //
    //     const qtyToAdd = addedQuantity === undefined ? 1 : addedQuantity;
    //
    //     product.quantity += qtyToAdd;
    //
    //     return product;
    //
    // }

    // async decreaseQuantity(barcode: string, quantity: number): Promise<IProduct | null| boolean> {
    //     const product = products.find(p => p.barcode === barcode)
    //     if (!product) {
    //         return null;
    //     }
    //     if ((product.quantity as number) < quantity) {
    //         return false;
    //     }
    //     product.quantity = product.quantity as number - quantity ;
    //
    //     return product;
    // }

    async deleteProduct(barcode: string): Promise<boolean | IProduct > {
        const index = products.findIndex(products => products.barcode === barcode)
        const product = products[index];

        if (index === -1) {
            return false;
        }
        products.splice(index, 1);
        return product as IProduct;
    }

    async updateProduct(barcode: string, updateData: Partial<IProduct>) {
            let product = products.find(p => p.barcode === barcode)
        if (!product) {

            return null;
        }

        // Вливаємо нові дані прямо в знайдений об'єкт
        Object.assign(product, updateData)


        return product;
    }


}