import { Response , Request } from "express";
//importacion de modelo.

const getTEST = async(req:Request,res:Response) => {
    try{
        const cuerpo = req.body;
        res.status(200).json({msg:'endpoint funcionando',cuerpo});
    } catch(err){res.status(500).json(err)}
};

module.exports = { getTEST }
