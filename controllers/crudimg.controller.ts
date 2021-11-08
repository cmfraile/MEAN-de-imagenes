import * as fs from 'fs';
import { Response , Request } from "express";
const { Pic } = require('../models/pic.model');

const getTEST = async(req:Request,res:Response) => {
    try {
        const cuerpo = req.body;
        res.status(200).json({msg:'endpoint funcionando',cuerpo});
    } catch(err){res.status(500).json(err)}
};

const getPicCollection = async(req:Request,res:Response) => {
    try {
        const busqueda = await Pic.find();
        res.status(200).json(busqueda);
    } catch(err){res.status(500).json(err)}
}

const postPicTEST = async(req:Request,res:Response) => {
    try {
        console.log(req.files);
        res.status(200).send('fin');
        //Aqui va el helper que manda el fichero a storage.
    } catch(err){res.status(500).json(err)}
};

module.exports = { getTEST , postPicTEST }
