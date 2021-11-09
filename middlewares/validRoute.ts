import { Response , Request , NextFunction } from 'express';
import { validate } from 'uuid';
import * as fs from 'fs';
import path from 'path';


const validRoute = (req:Request,res:Response,next:NextFunction) => {
    const { ruta } = req.params;
    const pathimg = path.join(__dirname,'../db&storage/storage',ruta);
    if(fs.existsSync(pathimg)){req.body.ruta = pathimg}else{req.body.ruta = undefined}
    next();
}

module.exports = { validRoute }