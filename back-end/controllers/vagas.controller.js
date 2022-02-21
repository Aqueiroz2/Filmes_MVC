const vagasService = require('../services/vagas.service');

const getVagas = (req, res) => {
    const vagas = vagasService.getVagasService();
    res.send(vagas);

}

const getVagasById = (req, res) => {
    const id = req.params.id
    const vaga = vagasService.getVagasByIdService(id);
    res.send(vaga);
}


module.exports = {
    getVagas,
    getVagasById
}