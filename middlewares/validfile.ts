import { NextFunction, Request , Response } from 'express';

const validFile = async( req:Request,res:Response,next:NextFunction ) => {
    console.log(req.files);
    if(!req.files || Object.keys(req.files).length === 0 || !req.files.archivo){
        return res.status(400).send({msg:"sin ficheros en la paticion - validFile"});
    }
    next();
}

module.exports = { validFile };