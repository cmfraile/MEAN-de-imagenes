import { UploadedFile } from "express-fileupload";
import uuid4 from "uuid4";
import path from 'path';

const uploadfile = (fichero:UploadedFile) => {
    return new Promise((rs,rj) => {
        const eValidas = ['png','jpg','jpeg']
        const extension = fichero.name.split('.')[fichero.name.split('.').length - 1];
        const nTEMP = `${uuid4()}.${extension}`;
        const uP = path.join(__dirname,'../db&storage/storage',nTEMP);
        if(!eValidas.includes(extension)){return rj(`La extensión ${extension} no esta permitida`)};
        //return rs({extension,nTEMP,uP});
        fichero.mv(uP,(err) => {
            if(err){rj(err)};
            rs(nTEMP);
        })
    });
}

module.exports = { uploadfile };

