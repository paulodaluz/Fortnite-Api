import axios from "axios";

let api = "https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?situacaoFuncionamento=1&estado=RS&cidade=4314100&enemMin=550";

export const getNotes = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${api}`)
            .then(dados => {
                // setTimeout(function () { resolve(dados.data.results) }, 99999000)
                resolve(dados.data)
            })
            .catch(erro => {
                reject(erro)
            })
    });
}
