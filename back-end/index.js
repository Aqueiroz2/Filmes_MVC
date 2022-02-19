
const express = require('express');

const app = express();

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

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá Blumers!');
})

app.get('/vagas', (req, res) => {
    res.send(blueVagas);
})

app.get('/vagas/:id', (req, res) => {
    const idParam = req.params.id;
    const vagaEcontrada = blueVagas.find(vaga => vaga.id == idParam);
    res.send(vagaEcontrada);
})

const port = 3000;
app.listen(port, () => {
    console.log(`App Rodando na porta ${port}`);
})