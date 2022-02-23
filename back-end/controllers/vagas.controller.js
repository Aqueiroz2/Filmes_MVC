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


const postVaga = (req, res) => {
    const vaga = req.body;
    vagasService.addVaga(vaga);
    const newVaga = vagasService.addVaga(vaga);
    res.send({ message: `Vaga ${ newVaga.oportunidade } na empresa ${ newVaga.empresa } cadastrada com sucesso`})

}


module.exports = {
    getVagas,
    getVagasById,
    postVaga
}