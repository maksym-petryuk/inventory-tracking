import type {Request, Response, NextFunction} from "express"
import {AppError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: any; // Сюди ми покладемо { id: 1, role: 'admin' }
}

const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;
    if (!token) {
        throw new AppError('Де дані курво', 401)
    }

    jwt.verify(token, process.env.JWT_SECRET as string , (err: any, decoded: any) => {
        if (err) {
            return next(new AppError('Невалідний або протермінований токен', 401))
        }

        req.user = decoded;
        next();
    })

}