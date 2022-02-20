const apiUrl = 'http://localhost:3000'

const lista = document.getElementById('lista');

const getVagas = async () => {
    const response = await fetch(`${apiUrl}/vagas`);
    const vagas = await response.json();
    vagas.map((vaga) => {
        console.log(vaga.empresa);
        lista.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${vaga.id}</td>
                <td>${vaga.empresa}</td>
                <td>${vaga.oportunidade}</td>
                <td>${vaga.tipo}</td>
                <td>${vaga.salario}</td>
            </tr>
        `)
    })

}
getVagas();

const escolherVaga = async () => {
    const idDigitado = document.getElementById('idVaga').value;
    const response = await fetch(`${apiUrl}/vagas/${idDigitado}`)
    const vaga = await response.json();

    document.getElementById('vaga').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${vaga.id}</td>
            <td>${vaga.empresa}</td>
            <td>${vaga.oportunidade}</td>
            <td>${vaga.tipo}</td>
            <td>${vaga.salario}</td>
        </tr>
    `)
}
