import type {Request, Response, NextFunction} from "express"

import jwt from "jsonwebtoken";
import {UnauthorizedError} from "../common/errors/unauthorized.js";


export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;
    if (!token) {
        throw new UnauthorizedError ('Де дані курво')
    }

    jwt.verify(token, process.env.JWT_SECRET as string , (err: any, decoded: any) => {
        if (err) {
            return next(new UnauthorizedError('Невалідний або протермінований токен'))
        }

        req.user = decoded;
        next();
    })

}