import axios from "axios";

let api = "http://educacao.dadosabertosbr.com/api/";

export const getPersons = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api}`)
      .then(dados => {
        // setTimeout(function () { resolve(dados.data.results) }, 99999000)
        resolve(dados.data.results);
      })
      .catch(erro => {
        reject(erro);
      });
  });
};