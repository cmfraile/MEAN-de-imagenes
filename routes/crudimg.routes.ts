import { Router } from "express";
import * as ev from 'express-validator';
const { getPicCollection , postPicTEST , getDUMBpic } = require('../controllers/crudimg.controller');
const { validRoute , validMaster:VM , validFile } = require('../middlewares/validadores');


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
],postPicTEST);

module.exports = _r