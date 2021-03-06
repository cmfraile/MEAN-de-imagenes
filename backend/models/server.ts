import express , { Application } from 'express';
import cors from 'cors';
const { dbC } = require('../db&storage/configdb');
import fileUpload from 'express-fileupload';

class Server {

    private app:Application;
    private port:string;
    private paths:any;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.paths = {
            crudimg:    '/api/crudimg'
        };
        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(fileUpload({useTempFiles:true,tempFileDir:'/tmp/',createParentPath:true}));
        //this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.crudimg,require('../routes/crudimg.routes'));
    }

    async conectarDB(){await dbC()};

    listen(){
        this.app.listen(this.port, () => {console.clear();console.log("SERVIDOR CORRECTAMENTE CORRIENDO")});
    }

}

export default Server;