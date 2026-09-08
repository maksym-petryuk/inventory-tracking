import express, {type NextFunction, type Request,type Response} from "express";
import type {Idone} from "../interface/errorAndResponse.js";
import type {AppError} from "../utils/error.js";


export default async (err:AppError , req: Request, res: Response, next:NextFunction) => {
    const {
        message = 'Something went wrong',
        statusCode = 400,
        ...rest
    } = err;


    const code = res.statusCode === 200 ? 500 : res.statusCode;


    const done : Idone = {
        success : false,
        status : statusCode,
        error : {
            message,
            rest:{
                name : rest.name,
                stack : process.env.NODE_ENV === 'production' ? undefined : err.stack,
            }
        },
        data : {},
        timestamp: Date.now(),

    }

    res.status(statusCode).json(done)
    console.log(done)


}
