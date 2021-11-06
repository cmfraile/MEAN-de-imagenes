import { NextFunction , Request , Response } from "express";
import * as jwt from 'jsonwebtoken';

const validarJWT = (req:Request,res:Response,next:NextFunction) => {
    try {
        const token = req.header('token');
        const secreto:string = process.env.JWTKEY || "";
        if(secreto == ""){return res.status(401).json({msg:'Error en la variable de entorno'})};
        if(!token){return res.status(401).json({msg:'Sin token en la petición'})};
        const tokenvalido = jwt.verify(token,secreto);
        console.log(tokenvalido);
        next();
    } catch(err) {
        res.status(401).json({msg:'sin token en la petición'});
    }
}

module.exports = { validarJWT };