import api from "./config.js"

export default {
  buscaDestinos: () => {
    return new Promise((resolve, reject) => {
      api
        .get("/api/destinos/list")
        .then((response) => {
          return resolve(response.data)
        })
        .catch((error) => {
          return reject(error)
        })
    })
  },
}
