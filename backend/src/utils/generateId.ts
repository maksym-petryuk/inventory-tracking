import * as crypto from "node:crypto";

export const newId = () =>{
    return crypto.randomUUID()
}