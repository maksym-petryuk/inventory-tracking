import {ErrorCodes} from "../../interface/errorCode.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";

export abstract class BaseError extends Error {
    public statusCode: StatusCodes;
    public errorCode: ErrorCodes;

    constructor({message, statusCode, errorCode}:{message: string, errorCode: ErrorCodes, statusCode: StatusCodes}) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
    }
    abstract serialize(): ErrorResponse;
}