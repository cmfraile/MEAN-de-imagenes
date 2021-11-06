import { Schema , model } from 'mongoose';

interface Usuario { nombre:string, foto:string, descripcion:string, admin:boolean, pass:string };

const usuarioSchema = new Schema<Usuario>({
    nombre:{type:String,required:true},
    foto:{type:String,required:false,default:'https://picsum.photos/200'},
    descripcion:{type:String,required:false},
    admin:{type:Boolean,required:true},
    pass:{type:String,required:false}
},{ collection : 'usuarios' });

usuarioSchema.methods.toJSON = function(){
    const { __v , _id , pass , ...usuario } = this.toObject();
    usuario.id = _id;
    return usuario;
}

const Usuario = model<Usuario>('Usuario',usuarioSchema);

module.exports = { Usuario }