import type {ValidationError as DetailedError} from 'express-validator';
import {BaseError} from "./base.js";
import {type ErrorResponse, StatusCodes} from "../../interface/response.js";
import {ErrorCodes} from "../../interface/errorCode.js";

export class ValidationError extends BaseError{
    private readonly deteils: DetailedError[];
    constructor(message: string , details: DetailedError[] = []) {
        super({message,
            statusCode:StatusCodes.VALIDATION_ERROR,
            errorCode:ErrorCodes.VALIDATION_ERROR
        });
        this.deteils = details;
    }

    serialize(): ErrorResponse {
        const detail = this.deteils
            .filter(err => err.type === 'field')
            .map(err=>({
                    fillde:err.type,
                    message:err.msg
                }))

        return {
            code:this.errorCode,
            message:this.message,
            detail:detail || []
        }
    }

}