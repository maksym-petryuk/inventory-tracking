import 'dotenv/config';
import express from 'express';
import {productRouter} from "./routes/product.js";
import error from "./middleware/error.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/products', productRouter);

app.use(error);

app.listen(process.env.PORT, () => console.log(`Сервер працює на порту ${process.env.PORT}`))