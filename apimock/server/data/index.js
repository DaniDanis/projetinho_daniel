const utils = require('../utils')

module.exports = {
  users: utils.parseJson('./data/users.json'),
  tasks: utils.parseJson('./data/tasks.json'),
  destinos: utils.parseJson('./data/destinos.json')
}
