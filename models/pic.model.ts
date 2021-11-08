import { Schema , model } from 'mongoose';
interface Pic { ruta:string }

const picSchema = new Schema<Pic>({
    ruta:{type:String,required:true}
},{collection:'pics'});

const Pic = model<Pic>('Pic',picSchema);

module.exports = { Pic }