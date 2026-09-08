import {ProductService} from "../services/product.js";
import type {Request, Response} from "express";
import {catchAsync, } from "../utils/catchAsync.js";
import {sendResponse} from "../utils/sendResponse.js";
import type {AuthRequest} from "../middleware/auth.js";
import {AppError} from "../utils/error.js";


export class ProductController{
       private productService = new ProductService();

       getProduct = catchAsync(async (req: Request, res: Response) => {
           const product = await this.productService.getProductByBarcode(req.params.barcode as string);
           if (!product) {
               res.status(404)
               throw new Error("Product not found");
           }
           sendResponse(res,{
               status:200,
               data:product
           })
       })

       getAllProducts = catchAsync(async (req: Request, res: Response) => {
            const productAll = await this.productService.getAllProducts();

            sendResponse(res, {
                status: 200,
                data: productAll,
                message: "Products retrieved successfully"
            })
       })

       createProduct  = catchAsync(async (req: AuthRequest, res: Response) => {

           const role = req.user.role;

           if (role != "admin") {
               throw new AppError("У вас немає прав для створення товару", 403);
           }

           const product = await this.productService.createProduct(req.body);
            if (!product) {
                throw new AppError("Product not found", 404);
            }
           sendResponse(res, {
               status:201,
               data: product,
               message: "Product created successfully"
           })


       })

       // decreaseQuantity = catchAsync(async (req: Request, res: Response) => {
       //     const product = await this.productService.decreaseQuantity(req.params.barcode as string, req.body.quantity);
       //
       //     if (product === null) {
       //         res.status(404)
       //         throw new Error("Product not found");
       //     }else if (product === false){
       //         res.status(400)
       //         throw new Error("Недостатньо товару на складі");
       //     }
       //     sendResponse(res, {
       //         status: 200,
       //         data: product,
       //         message: `Продано ${req.body.quantity} таку кількість`
       //     })
       // })

       updateProduct  = catchAsync(async (req: Request, res: Response) => {
           const prod  = await this.productService.updateProduct(req.params.barcode as string, req.body);
           if (prod !== null) {
               sendResponse(res, {
                   status: 200,
                   data: prod,
                   message: "Product updated successfully"
               })
           }else {
               res.status(404)
               throw new Error("Product not found");
           }

       })
       deleteProduct  =catchAsync( async (req: Request, res: Response) => {
           const resalt = await this.productService.deleteProduct(req.params.barcode as string);
            if (resalt === null) {
                res.status(404)
                throw new Error("Product not found, when trying to delete");
            }else {
                sendResponse(res, {
                    status: 200,
                    data: resalt,
                    message: "Product deleted successfully"
                })
            }
       })

    }