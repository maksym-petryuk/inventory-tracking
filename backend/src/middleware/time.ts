import express from "express";

export interface CustomRequest extends express.Request {
    requestTime?: number; // Знак питання означає, що це поле необов'язкове (воно з'явиться тільки після цього middleware)
}

export const data = (req: CustomRequest, res: express.Response, next: express.NextFunction) => {
    console.log("час :" + Date.now());
    req.requestTime = Date.now();
    next();
};
