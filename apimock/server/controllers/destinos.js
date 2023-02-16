const data = require("../data");
const accounts = require("./accounts");


module.exports = {
  list: (req, res) => {
    const destinos = data.destinos
    res.send(destinos)
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
