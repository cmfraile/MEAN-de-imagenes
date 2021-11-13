import { Router } from "express";
import * as ev from 'express-validator';
const { getPicCollection , postPic , postPicTest , getDUMBpic , delPIC } = require('../controllers/crudimg.controller');
const { validRoute , validMaster:VM , validFile } = require('../middlewares/validadores');
import { validate } from 'uuid';


const _r = Router();

_r.get('/',getPicCollection);

_r.get('/gdp/:ruta',[
    ev.param('ruta').not().isEmpty(),
    validRoute,
    VM
],getDUMBpic);

_r.post('/',[
    validFile,
    VM
],postPic);

_r.post('/ppt',postPicTest);

_r.delete('/:id',[
    ev.param('id').not().isEmpty(),
    ev.param('id').custom( validate )
],delPIC)

module.exports = _r