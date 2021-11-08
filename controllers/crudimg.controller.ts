import { Response , Request } from "express";
import { UploadedFile } from "express-fileupload";
const { Pic } = require('../models/pic.model');
const { uploadfile:uf } = require('../helpers/uploadfile');

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
        const fichero:UploadedFile = req.body.fichero
        const upload = await uf(fichero);
        res.status(200).json({fichero,upload});
        //Aqui va el helper que manda el fichero a storage.
    } catch(err){res.status(500).json(err)}
};

module.exports = { getTEST , postPicTEST }
