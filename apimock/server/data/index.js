const utils = require('../utils')

module.exports = {
  users: utils.parseJson('./data/users.json'),
  destinos: utils.parseJson('./data/destinos.json')
}
