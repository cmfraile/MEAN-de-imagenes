const { v4:uuidv4 } = require('uuid4');

const uploadfile = async(ficheros:any , eValidas = ['png','jpg','jpeg','gif']) => {
    return new Promise ((rs,rj) => {
        const { archivo } = ficheros;
        if(!archivo){rj(console.log("no se esta subiendo el fichero"))};
        rs(console.log("aqui se sube el fichero:",archivo));
    });
}