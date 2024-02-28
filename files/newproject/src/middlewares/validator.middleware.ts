import { NextFunction, type Request, type Response } from "express";
import Joi from "joi";

function validator(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);

        if (result.error) {
            res.status(400).json({
                "error": "you don't meet the requirements"
            });
        } else {
            next();
        }
    };
}

export default validator;
