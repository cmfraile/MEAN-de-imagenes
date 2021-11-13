import { NextFunction, Request , Response } from 'express';
const { validationResult } = require('express-validator');
import { validate } from 'uuid';
import * as fs from 'fs';
import path from 'path';

const validFile = async(req:Request,res:Response,next:NextFunction ) => {
    const fichero:any = req.files;
    if(!fichero){return res.status(400).send("Sin ficheros en la petición")};
    if(Object.keys(fichero).length === 0 || Object.keys(fichero).length < 1){
        return res.status(400).send('Ha llegado ninguno o mas de un fichero, y solo se admite uno');
    }
    req.body.fichero = fichero[''];
    next();
}

const validMaster = (req:Request,res:Response,next:NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){return res.status(400).json(errors)};
    next();
}

const validRoute = (req:Request,res:Response,next:NextFunction) => {
    const { ruta } = req.params;
    if(!validate(ruta.split('.')[0])){return res.status(400).send("la ruta de la imagen no es correcta")};
    const pathimg = path.join(__dirname,'../db&storage/storage',ruta);
    if(fs.existsSync(pathimg)){req.body.ruta = pathimg}else{req.body.ruta = undefined}
    next();
}

module.exports = { validFile , validMaster , validRoute }