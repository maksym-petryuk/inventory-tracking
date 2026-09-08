import {ProductRepository} from "../repositories/product.js";
import type {IProduct} from "../interface/product.js";
import type {ICreateProductDTO} from "../interface/createProductDTO.js";
import {newId} from "../utils/generateId.js";
import {AppError} from "../utils/error.js";



export class ProductService {
    private productRepo = new ProductRepository();

    async getAllProducts(){
        return await this.productRepo.getAllProduct()
    }

    async getProductByBarcode(barcode: string){
        return await this.productRepo.getProduct(barcode);
    }


    // async decreaseQuantity(barcode: string, quantity: number ){
    //     return await this.productRepo.decreaseQuantity(barcode, quantity);
    //
    // }


    async createProduct(productData: ICreateProductDTO) {

        const barcode = productData.barcode
        const product = await this.productRepo.findByBarcode(barcode);

        if (!product) {
            const newProduct : IProduct = {
                id: newId(),
                ...productData,
            }
            await this.productRepo.save(newProduct);

            return newProduct;
        }

        throw new AppError('Товар з таким штрих-кодом вже існує', 400)

    }



    async deleteProduct(barcode: string) {
        const bul = await this.productRepo.deleteProduct(barcode)
        if (!bul) {
            return null
        }else {
            return bul;
        }

    }

    async updateProduct(barcode: string, updeteData : Partial<IProduct>) {
        const prod = await this.productRepo.updateProduct(barcode, updeteData);

        if (prod === null) {
             throw Error(`Product with barcode: ${barcode} not found`);
        }

        return prod

    }

}