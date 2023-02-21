const data = require("../data");
const accounts = require("./accounts");


module.exports = {
  list: (req, res) => {
    const destinos = data.destinos.filter((t) => t.id == 1)
    const nomeDestinos = []
    for (const destino of destinos) {
      nomeDestinos.push(destino.description)
    }
    const response = {
      destinos: nomeDestinos
    }
    res.send(response)
    return
  },
  add: (req, res) => {
    const loggedUser = accounts.loginRequired(req, res);
    if (!loggedUser) {
      return;
    }
    const { description } = req.body;
    const id = getMaxId(data.tasks) + 1;
    const newTask = {
      id,
      description,
      userId: loggedUser.id,
    };
    data.tasks.push(newTask);
    res.send(newTask);
  },
};
