import { Router } from "express";
import * as ev from 'express-validator';
const { getPicCollection , postPicTEST , getDUMBpic } = require('../controllers/crudimg.controller');
const { validFile } = require('../middlewares/validfile');
const { validRoute } = require('../middlewares/validRoute');
const { validMaster:VM } = require('../middlewares/validmaster');


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