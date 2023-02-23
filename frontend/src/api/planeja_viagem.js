import api from "./config.js"
import apiHelpers from "./helpers.js"


export default {
  buscaDestinos: (description) => {
    return new Promise((resolve, reject) => {
      api
        .post("/api/destinos/list", description)
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
