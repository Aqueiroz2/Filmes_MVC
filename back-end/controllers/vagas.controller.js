const vagasService = require('../services/vagas.service');

const getVagas = (req, res) => {
    vagasService.getVagasService();
    res.send(vagas);

}

const getVagasById = (req, res) => {
    const id = req.params.id
    vagasService.getVagasByIdService(id);
    res.send(vaga);
}


module.exports = {
    getVagas,
    getVagasById
}