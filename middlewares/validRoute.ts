import { Response , Request , NextFunction } from 'express';
import { validate } from 'uuid';
import * as fs from 'fs';
import path from 'path';


const validRoute = (req:Request,res:Response,next:NextFunction) => {
    const { ruta } = req.params;
    const pathimg = path.join(__dirname,'../db&storage/storage',ruta);
    if(fs.existsSync(pathimg)){req.body.ruta = pathimg ; next()}else{
        req.body.ruta = path.join(__dirname,'../db&storage/storage/assets/inf.png');
        next();
    };
}

module.exports = { validRoute }