import express, {type Response} from "express";
import type {Idone, Iresponse } from "../interface/errorAndResponse.js";



export const sendResponse = async (res: Response, Ndata:Iresponse ) => {
    const { status, message, data } = Ndata;
    const response : Idone = {
        success : true,
        status : status,
        error: {},
        data : {
            message: message || "Operation successful",
            data: data
        },
        timestamp : Date.now()
    }
    res.status(status).json(response);
}