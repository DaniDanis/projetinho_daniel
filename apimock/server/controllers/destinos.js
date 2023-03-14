const data = require("../data");


module.exports = {
  list: (req, res) => {
    const form = req.body
    const destinos = data.atrativos.filter((t) => t.tipo_destino == form.tipo_destino || t.clima == form.clima || t.tipo_turismo == form.tipo_turismo)
    const destinos_alternativos = []
    const destinos_perfeitos = []
    for (const destino of destinos) {
      let ranking = 0
      if (destino.tipo_destino == form.tipo_destino) {
        ranking ++
      }
      if (destino.clima == form.clima) {
        ranking ++
      }
      if (destino.tipo_turismo == form.tipo_turismo) {
        ranking ++
      }
      if (ranking == 2) {
        destinos_perfeitos.push(destino)
      } else {
        destinos_alternativos.push(destino)
      }
    }
    const response = {
      destinos_perfeitos: destinos_perfeitos,
      destinos_alternativos: destinos_alternativos
    }
    res.send(response)
  }
};
