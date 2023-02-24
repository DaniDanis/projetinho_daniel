const data = require("../data");
const accounts = require("./accounts");


module.exports = {
  list: (req, res) => {
    const form = req.body
    const destinos = data.destinos.filter((t) => t.tipoDestino == form.tipoDestino || t.clima == form.clima || t.tipoTurismo == form.tipoTurismo)
    const destinosAlternativos = []
    const destinosPerfeitos = []
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
      if (ranking == 3) {
        destinosPerfeitos.push(destino)
      } else {
        destinosAlternativos.push(destino)
      }
    }
    const response = {
      destinosPerfeitos: destinosPerfeitos,
      destinosAlternativos: destinosAlternativos
    }
    res.send(response)
  }
};
