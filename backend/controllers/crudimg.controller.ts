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

const postPic = async(req:Request,res:Response) => {
    try {
        const fichero:UploadedFile = req.body.fichero
        const upload = await uf(fichero);
        const nuevafoto = new Pic({ruta:upload}) ; await nuevafoto.save();
        return res.status(200).json({msg:"nueva foto subida papu",nuevafoto});
    } catch(err){res.status(500).json(err)}
};

const postPicTest = async(req:Request,res:Response) => {
    try{
        const cuerpo = req.body ; const ficheros = req.files;
        return res.status(200).json({cuerpo,ficheros});
    } catch(err){res.status(500).json(err)}
}

const delPIC = async(req:Request,res:Response) => {
    let aborrar = await Pic.findByIdAndDelete(req.params.id);
    if(aborrar !== null){
        await df(aborrar.ruta);
        return res.status(200).json(aborrar);
    } else {
        return res.status(200).json(aborrar);
    }
    
}

const getDUMBpic = async(req:Request,res:Response) => {
    try {
        if(req.body.ruta == undefined){return};
        res.sendFile(req.body.ruta);
    } catch(err){res.status(500).json(err)}
}

module.exports = { getPicCollection , postPic , postPicTest , getDUMBpic , delPIC }
