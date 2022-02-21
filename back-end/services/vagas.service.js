const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        salario: 3000,
        oportunidade: "Front-End Jr",
        tipo: "estágio"
    },
    {
        id: 2,
        empresa: "Google",
        salario: 10000,
        oportunidade: "Front-End Jr",
        tipo: "CLT"
    },
    {
        id: 3,
        empresa: "Facebook",
        salario: 20000,
        oportunidade: "Full Stack Sr",
        tipo: "PJ"
    },
    {
        id: 4,
        empresa: "Amazon",
        salario: 15000,
        oportunidade: "Full Stack Pl",
        tipo: "CLT"
    }
]

const getVagasService = () => {
    return blueVagas;
}

const getVagasByIdService = (idParam) => blueVagas.find((vaga) => vaga.id == idParam)

module.exports = {
    getVagasService,
    getVagasByIdService
}

