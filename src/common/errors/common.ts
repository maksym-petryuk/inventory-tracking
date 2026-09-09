import {BaseError} from "./base.js";
import {ErrorCodes} from "../../interface/errorCode.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";


export class CommonError extends BaseError{
    constructor(message: string) {
        super({message,
            errorCode: ErrorCodes.COMMON_ERROR,
            statusCode : StatusCodes.COMMON_ERROR} );
    }
    serialize(): ErrorResponse {
        return {
            code: this.errorCode,
            message: this.message
        }
    }
}