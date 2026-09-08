import {Router} from "express";
import {ProductController} from "../controllers/product.js";

const productController = new ProductController();

export const productRouter = Router();

productRouter.get('/', productController.getAllProducts);

productRouter.post('/create', productController.createProduct);

// productRouter.put('/sell/:barcode', productController.decreaseQuantity);

productRouter.get('/:barcode', productController.getProduct);

productRouter.put('/:barcode', productController.updateProduct);



productRouter.delete('/:barcode', productController.deleteProduct);