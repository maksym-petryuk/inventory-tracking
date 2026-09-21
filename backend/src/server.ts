import 'dotenv/config';
import express from 'express';
import {productRouter} from "./routes/product.js";
import error from "./middleware/responseError.js";
import cookieParser from "cookie-parser";
import {auth} from "./middleware/auth.js";
import {authRouter} from "./routes/auth.js";
import {logger} from "./utils/logger.js";
import {initLogger} from "./middleware/logged.js";
import * as path from "node:path";

initLogger(path.join(process.cwd(), 'logs'));

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(logger)

app.use('/auth', authRouter);
app.use('/products',auth,  productRouter);

app.use(error);


app.listen(process.env.PORT, () => console.log(`Сервер працює на порту ${process.env.PORT}`))