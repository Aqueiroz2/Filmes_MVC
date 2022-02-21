const express = require('express');

const router = express.Router();

const vagasController = require('../controllers/vagas.controller');

router.get('/', vagasController.getVagas);

router.get('/:id' , vagasController.getVagasById);



module.exports = router;