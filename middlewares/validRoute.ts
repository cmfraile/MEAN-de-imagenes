import { Response , Request , NextFunction } from 'express';
import { validate } from 'uuid';
import * as fs from 'fs';
import path from 'path';

const validRoute = (req:Request,res:Response,next:NextFunction) => {
    let { ruta } = req.params ; ruta+='.jpg' ;
    const pathimg = path.join(__dirname,'../db&storage/storage',ruta);
    if(fs.existsSync(pathimg)){req.body.ruta = pathimg ; next()}else{
        req.body.ruta = path.join()
    };
}

module.exports = { validRoute }