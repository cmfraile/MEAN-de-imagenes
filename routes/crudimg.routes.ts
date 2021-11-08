import { Router } from "express";
import { body } from "express-validator";
const { getTEST , postPicTEST } = require('../controllers/crudimg.controller');
const { validFile } = require('../middlewares/validfile');
const { validMaster:VM } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',[
    body('cuerpo').not().isEmpty(),
    VM
],getTEST);

_r.post('/',[
    validFile,
    VM
],postPicTEST);

module.exports = _r