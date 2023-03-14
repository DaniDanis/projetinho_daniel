const utils = require('../utils')

module.exports = {
  users: utils.parseJson('./data/users.json'),
  atrativos: utils.parseJson('./data/atrativos.json')
}
