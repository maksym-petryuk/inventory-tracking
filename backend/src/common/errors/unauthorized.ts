import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";

export class UnauthorizedError extends BaseError {
    constructor(message: string) {
        super({
            message,
            statusCode: StatusCodes.UNAUTHORIZED,
            errorCode: ErrorCodes.UNAUTHORIZED
        });
    }
    serialize(): ErrorResponse {
        return {
            code: this.errorCode,
            message : this.message
        };
    }
}