import { Response , Request } from "express";
const { Usuario } = require('../models/usuario');
const { gJWT } = require('../helpers/gJWT');
import * as jwt from 'jsonwebtoken';
import * as bc from 'bcryptjs';

const obtenerPRUEBA = async(req:Request,res:Response) => {
    try{
        res.status(200).json('La prueba se ha realizado correctamente');
    } catch(err) {
        return res.status(500).json(err);
    }
};

const arrayPRUEBAS = async(req:Request,res:Response) => {
    try{
        const busqueda = await Usuario.find();
        res.status(200).json(busqueda);
    } catch(err){
        return res.status(500).json({err});
    }
};

const insertarUSUARIO = async(req:Request,res:Response) =>{
    try{
        const data = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            admin : false
        }
        const usuario = new Usuario(data);
        await usuario.save();
        res.status(200).json(usuario);
    } catch(err){
        return res.status(500).json({err});
    }
};

const borrarUNO = async(req:Request,res:Response) => {
    try{
        const {id} = req.headers;
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({msg:`El objeto ${id} fue borrado satisfactoriamente`});
    } catch(err) {
        res.status(400).json({msg : 'Error en la operación',err})
    }
}

const borrarTODO = async(req:Request,res:Response) => {
    try{
        await Usuario.deleteMany({admin:false});
        const busqueda = await Usuario.find()
        res.status(200).json({busqueda});
    } catch(err){
        return res.status(500).json({err});
    }
};

const agregarADMIN = async(req:Request,res:Response) => {
    try {
        const data = {
            nombre : req.body.usuario,
            pass : bc.hashSync(req.body.pass,await bc.genSalt(5)),
            admin : true
        };
        const busqueda = await Usuario.find({admin:true});
        if(busqueda.length == 1){return res.status(403).json({msg:'El admin ya existe',busqueda})};
        const usuario = new Usuario(data) ; usuario.save();
        res.status(200).json({msg:'EL ADMIN;',usuario});
    } catch(err){
        res.status(500).json({err});
    }
};

const login = async(req:Request,res:Response) => {
    try {
        const data = {
            usuario : req.body.usuario,
            pass : req.body.pass
        }
        const usuario = await Usuario.findOne({nombre:data.usuario});
        if(!usuario){return res.status(400).json({msg:'USUARIO/contraseña incorrectos'})};
        const valida = bc.compareSync(data.pass,usuario.pass);
        if(!valida){return res.status(400).json({msg:'Usuario/CONTRASEÑA incorrectos'})};
        const token = await gJWT(usuario.id);
        res.status(200).json({usuario,token});
    } catch(err){
        res.status(500).json(err);
    }

}

const loginestado = async(req:Request,res:Response) => {
    try{
        const token:any = req.headers.token ; const detoken:any = jwt.decode(token);
        if(detoken == null){return res.send({loginado:false})};
        const busqueda = await Usuario.findById(detoken.id);
        return res.status(200).json({
            loginado:true,
            usuario: {
                nombre: busqueda.nombre,
                foto: busqueda.foto
            }
        });
    } catch(err){
        res.send({loginado:false});
    }
};



module.exports = { obtenerPRUEBA , arrayPRUEBAS , insertarUSUARIO , borrarTODO , agregarADMIN , login , loginestado , borrarUNO }