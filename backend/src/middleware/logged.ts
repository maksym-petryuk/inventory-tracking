
import express from "express";
import winston, {level, type Logger} from "winston";
import * as path from "node:path";
import e from "express";

let loggerInstance: Logger;

 const createLogger =(logDir : string) :Logger => {
     return  winston.createLogger({
         level: 'info',
         format: winston.format.combine(
             winston.format.errors({stack: true}),
             winston.format.timestamp(),
             winston.format.json(),
         ),
         transports: [
             new winston.transports.Console(),
             new winston.transports.File({filename: path.join(logDir, 'error.log'), level: 'error'}),
             new winston.transports.File({filename: path.join(logDir, 'all.log')}),
         ]
     })
 }

 const initLogger = (logDir : string) : Logger => {
     if (loggerInstance) {
         return loggerInstance;
     }
     loggerInstance = createLogger(logDir)

     return loggerInstance
 }

 const getLogger = () => {
    if (!loggerInstance) {
        throw new Error('No logger instance jet');
    }
    return loggerInstance;
 }

 export { getLogger, initLogger };