
const express = require('express');

const app = express();

const vagasRouter = require('./routes/vagas.route');

app.use('/vagas', vagasRouter);


app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
})

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log(`App Rodando na porta ${port}`);
})