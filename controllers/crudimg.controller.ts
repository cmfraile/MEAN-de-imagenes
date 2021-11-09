import { Response , Request } from "express";
import { UploadedFile } from "express-fileupload";
import path from 'path';

const { Pic } = require('../models/pic.model');
const { uploadfile:uf } = require('../helpers/uploadfile');

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
        const nuevafoto = new Pic({ruta:upload}) ; await nuevafoto.save();
        return res.status(200).send('Nueva foto subida, papu');
        //Aqui va el helper que manda el fichero a storage.
    } catch(err){res.status(500).json(err)}
};

const getDUMBpic = async(req:Request,res:Response) => {
    try {
        const { ruta } = req.params;
        res.status(200).send('fin');
    } catch(err){res.status(500).json(err)}
}

module.exports = { getPicCollection , postPicTEST , getDUMBpic }
