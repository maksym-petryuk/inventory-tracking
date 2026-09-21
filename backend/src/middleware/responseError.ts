import express, {type NextFunction, type Request,type Response} from "express";

import { StatusCodes} from "../interface/response.js";
import {BaseError} from "../common/errors/base.js";
import {data} from "./time.js";
import {ErrorCodes} from "../interface/errorCode.js";


export default async (err:Error , req: Request, res: Response, next:NextFunction) => {
    const {
        message = 'Something went wrong',

        ...rest
    } = err;

    res.log!.error({message , stack: err.stack});

    if (err instanceof BaseError){
        res.status(err.statusCode).json({
                data: {},
                error: err.serialize(),
            })
        return;
    }

    res.status(StatusCodes.COMMON_ERROR).json({
        data:{},
        error: {
            message,
            code: ErrorCodes.COMMON_ERROR,
        }
    })





}
