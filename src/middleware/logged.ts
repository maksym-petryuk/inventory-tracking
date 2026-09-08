
import express from "express";

export const logged = function (req: Express.Request, res: express.Response, next: express.NextFunction) {
    console.log('Logged');
    next();
}