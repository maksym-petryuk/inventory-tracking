import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";


export class ForbidenError extends BaseError {
    constructor(message: string) {
        super({
            message,
            statusCode: StatusCodes.FORBIDDEN,
            errorCode: ErrorCodes.FORBIDDEN,
        });
    }
    serialize(): ErrorResponse {
        return {
            code : this.errorCode,
            message : this.message,
        }
    }

}