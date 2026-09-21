import crypto from 'node:crypto';

import type {Request, Response, NextFunction } from 'express';
import type { Logger } from 'winston';
import {getLogger} from "../middleware/logged.js";

const logger = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const logger = getLogger();
        req.log = logger.child({
            requestId: crypto.randomUUID(),
            method: req.method,
            url: req.url
        });

        next();
    };
};

export { logger };