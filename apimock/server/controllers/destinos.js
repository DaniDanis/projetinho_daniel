const data = require("../data");
const accounts = require("./accounts");


module.exports = {
  list: (req, res) => {
    const form = req.body
    const destinos = data.destinos.filter((t) => t.tipoDestino == form.tipoDestino || t.clima == form.clima || t.tipoTurismo == form.tipoTurismo)
    const nomeDestinos = {}
    for (const destino of destinos) {
      let ranking = 0
      if (destino.tipoDestino == form.tipoDestino) {
        ranking ++
      }
      if (destino.clima == form.clima) {
        ranking ++
      }
      if (destino.tipoTurismo == form.tipoTurismo) {
        ranking ++
      }
      nomeDestinos[destino.destino] = ranking
    }
    const destinosOrdenados = {};

    // Cria um array com as chaves do objeto de destinos
    const chavesDestinos = Object.keys(nomeDestinos);

    // Ordena o array em ordem decrescente com base nos valores do objeto de destinos
    chavesDestinos.sort((destinoA, destinoB) => nomeDestinos[destinoB] - nomeDestinos[destinoA]);

    // Adiciona cada destino ordenado no novo objeto de destinos ordenados
    for (let i = 0; i < chavesDestinos.length; i++) {
      const destino = chavesDestinos[i];
      const classificacao = nomeDestinos[destino];
      const classificacaoEmPorcentagem = ((classificacao/3)*100).toFixed(0)
      destinosOrdenados[destino] = classificacaoEmPorcentagem;
    }
    console.log(destinosOrdenados)
    const response = {
      destinos: destinosOrdenados
    }
    res.send(response)
  }
};
