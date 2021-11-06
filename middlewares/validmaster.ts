import { NextFunction, Response } from "express";
const { validationResult } = require('express-validator');

const validMaster = (req:Request,res:Response,next:NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){return res.status(400).json(errors)};
    next();
}

module.exports = { validMaster }