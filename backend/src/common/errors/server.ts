import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";


export class ServerError extends BaseError {
    constructor(message: string) {
        super({
            message,
            statusCode: StatusCodes.SERVER_ERROR,
            errorCode: ErrorCodes.SERVER_ERROR,
        });
    }
    serialize(): ErrorResponse {
        return {
            code : this.errorCode,
            message : this.message,
        }
    }

}