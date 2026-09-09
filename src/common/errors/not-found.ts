import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";

export class NotFound extends BaseError{
    constructor(message: string) {
        super({message,
            statusCode:StatusCodes.NOT_FOUND,
            errorCode:ErrorCodes.NOT_FOUND
        });
    }
    serialize(): ErrorResponse {
        return {
            code: this.errorCode,
            message: this.message,
        };
    }
}