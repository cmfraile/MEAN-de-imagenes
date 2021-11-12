import { Router } from "express";
import { header } from "express-validator";
const { body } = require('express-validator');
const { obtenerPRUEBA , arrayPRUEBAS, insertarUSUARIO , borrarTODO , agregarADMIN , login , loginestado , borrarUNO } = require('../controllers/prueba');
const { validMaster:VM } = require('../middlewares/validmaster');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);

_r.get('/arraypruebas',arrayPRUEBAS);

_r.get('/estado',VM,loginestado);

_r.post('/',[
    body('nombre').not().isEmpty(),
    body('descripcion').not().isEmpty(),
    VM
],insertarUSUARIO);

_r.post('/crearadmin',[
    body('usuario').not().isEmpty(),
    body('pass').not().isEmpty(),
    VM
],agregarADMIN);

_r.post('/login',[
    body('usuario').not().isEmpty(),
    body('pass').not().isEmpty(),
    VM
],login);

_r.delete('/borraruno',[
    header('id').not().isEmpty(),
    header('id').isMongoId(),
    vJWT,
    VM
],borrarUNO);

_r.delete('/borrartodo',borrarTODO);

module.exports = _r;
