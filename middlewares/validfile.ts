import { NextFunction, Request , Response } from 'express';

const validFile = async(req:Request,res:Response,next:NextFunction ) => {
    const fichero = req.files;
    if(!fichero){return res.status(400).send("Sin ficheros en la petición")};
    if(Object.keys(fichero).length === 0 || Object.keys(fichero).length < 1){
        return res.status(400).send('Ha llegado ninguno o mas de un fichero, y solo se admite uno');
    }
    req.body.fichero = fichero[''];
    next();
}

module.exports = { validFile };