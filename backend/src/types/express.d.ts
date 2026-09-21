import type {Request} from "express";
import type {Logger} from "winston";

export interface IJwtPayload {
    id: string;
    userName: string;
    roles: string;
}

declare global  {
    namespace Express {
        interface Request {
            user?: IJwtPayload;
            log?: Logger;
        }
        interface Response {
            log?: Logger;
        }
    }
}