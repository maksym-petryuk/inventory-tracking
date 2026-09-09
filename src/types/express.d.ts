import type {Request} from "express";

export interface IJwtPayload {
    id: string;
    userName: string;
    roles: string;
}

declare global  {
    namespace Express {
        interface Request {
            user?: IJwtPayload;
        }
    }
}