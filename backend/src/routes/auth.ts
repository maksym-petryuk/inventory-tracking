import {Router} from "express";
import {auth} from "../controllers/auth.js";

export const authRouter = Router();

const Auth = new auth();

authRouter.post('/login', Auth.login);
authRouter.post('/register', Auth.register);