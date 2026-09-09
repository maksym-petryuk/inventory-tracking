import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";

export class BadRequestError extends BaseError {
    constructor(message: string) {
        super({
            message,
            statusCode:StatusCodes.BAD_REQUEST,
            errorCode:ErrorCodes.BAD_REQUEST
        });
    }
    serialize(): ErrorResponse {
        return {
            code:this.errorCode,
            message:this.message
        };
    }
}