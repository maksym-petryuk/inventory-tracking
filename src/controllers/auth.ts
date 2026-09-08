import jwt from 'jsonwebtoken'
import {catchAsync} from "../utils/catchAsync.js";
import type {Response, Request} from "express";
import {AppError} from "../utils/error.js";
import {sendResponse} from "../utils/sendResponse.js";
import type {AuthRequest} from "../middleware/auth.js";
import bcrypt from "bcryptjs";

export class app {

    register = catchAsync( async (req: Request, res: Response )=> {
        const {name, password, role} = req.body;

        const hashed = await bcrypt.hash(password , 10);

        const newUser = {id:2, name, passwor:hashed, role};

        const {passwor, ...data} = newUser;

        sendResponse(
            res,
            {
                status:201,
                message:'Створено нового користувача успішно',
                data
            }
        )

    })

    login = catchAsync(async (req: Request,res: Response) => {
        const {userName, password} = req.body

        if (userName !== 'admin' || password !== '12345') {
            throw new AppError ("Невірний логін або пароль", 401);
        }

        const token = jwt.sign({id:1, role: 'admin'},"my_super_secret_key", {expiresIn: "15m"});
        res.cookie('accessToken', token, {httpOnly: true});

        sendResponse(res,
            {
                status:200,
                data:{
                    message: "Вхід виконано успішно",
                    data:{}
                }
            }
            )

    })

}