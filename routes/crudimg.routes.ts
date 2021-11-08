import { Router } from "express";
import { body } from "express-validator";
const { getTEST } = require('../controllers/crudimg.controller');
const { validMaster:VM } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',[
    body('cuerpo').not().isEmpty(),
    VM
],getTEST);

module.exports = _r