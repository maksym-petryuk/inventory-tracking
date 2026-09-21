import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";

export class InvalidCredentialsError extends BaseError {
    constructor(message: string) {
        super({
            message,
            statusCode:StatusCodes.INVALID_CREDENTIALS,
            errorCode:ErrorCodes.INVALID_CREDENTIALS
        });
    }
    serialize(): ErrorResponse {
        return {
            code:this.errorCode,
            message: this.message
        };
    }
}