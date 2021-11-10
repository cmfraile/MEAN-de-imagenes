import { Response , Request } from "express";
import { UploadedFile } from "express-fileupload";
const { Pic } = require('../models/pic.model');
const { uploadfile:uf , delfile:df } = require('../helpers/uploadfile');

const dumbcall:string = `${process.env.ENVIROMENT}/api/crudimg/gdp/`

const getPicCollection = async(req:Request,res:Response) => {
    try {
        let busqueda = await Pic.find();
        for(let dato in busqueda){const rutablanda = busqueda[dato].ruta;busqueda[dato].ruta = `${dumbcall}${rutablanda}`};
        res.status(200).json(busqueda);
    } catch(err){res.status(500).json(err)}
}

const postPicTEST = async(req:Request,res:Response) => {
    try {
        const fichero:UploadedFile = req.body.fichero
        const upload = await uf(fichero);
        const nuevafoto = new Pic({ruta:upload}) ; await nuevafoto.save();
        return res.status(200).send('Nueva foto subida, papu');
    } catch(err){res.status(500).json(err)}
};

const delPIC = async(req:Request,res:Response) => {
    let aborrar = await Pic.findByIdAndDelete(req.params.id);
    if(aborrar !== null){
        await df(aborrar.ruta);
        return res.status(200).send('fichero borrado del sistema');
    } else {
        return res.status(200).send('No habia nada que borrar.')
    }
    
}

const getDUMBpic = async(req:Request,res:Response) => {
    try {
        if(req.body.ruta == undefined){return};
        res.sendFile(req.body.ruta);
    } catch(err){res.status(500).json(err)}
}

module.exports = { getPicCollection , postPicTEST , getDUMBpic , delPIC }
