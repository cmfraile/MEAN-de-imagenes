import { connect as MonConnect } from "mongoose";

const dbC = async() => {
    const dbuser = {usuariopass:'pruebauser',db:'pruebas'};
    try{
        MonConnect(`mongodb://localhost:27017/${dbuser.db}`,{user:`${dbuser.usuariopass}`,pass:`${dbuser.usuariopass}`},(err) => {console.log});
        console.log('Estamos correctamente conectados a la base de datos.')
    }catch(err){console.log(err);throw new Error('No se logro establecer la conexión')};
}

module.exports = { dbC };