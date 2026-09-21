import jwt from 'jsonwebtoken'
import {catchAsync} from "../utils/catchAsync.js";
import type {Response, Request} from "express";

import {sendResponse} from "../utils/sendResponse.js";
import bcrypt from "bcryptjs";
import type {CreateUserDTO, IUser, PublicUser} from "../interface/entities/user.js";
import {newId} from "../utils/generateId.js";
import {UnauthorizedError} from "../common/errors/unauthorized.js";

export class auth {

    register = catchAsync( async (req: Request, res: Response )=> {

        const {userName, password, roles} = req.body as CreateUserDTO ;

        const hashed = await bcrypt.hash(password , 10);

        const id = newId()

        const newUser : IUser = {id, userName, password:hashed, roles};

        const {password:_,...userSend} = newUser ;

        sendResponse(
            res,
            {
                status:201,
                message:'Створено нового користувача успішно',
                data:userSend ,
            }
        )

    })

    login = catchAsync(async (req: Request,res: Response) => {
        const {userName, password} = req.body

        if (userName !== 'admin' || password !== '12345') {
            throw new UnauthorizedError ("Невірний логін або пароль");
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